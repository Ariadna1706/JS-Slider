export default class JSSlider {
  constructor(imagesSelector) {
    this.imagesSelector = imagesSelector;
    this.sliderRootSelector = ".js-slider";
    this.imagesList = document.querySelectorAll(imagesSelector);
    this.sliderRootElement = document.querySelector(this.sliderRootSelector);
  }

  run() {
    this.initEvents(this.imagesList, this.sliderRootElement);
    this.initCustomEvents(
      this.imagesList,
      this.sliderRootElement,
      this.imagesSelector
    );
  }

  initEvents(imagesList, sliderRootElement) {
    this.imagesList.forEach((item) => {
      item.addEventListener("click", (e) => {
        this.fireCustomEvent(e.currentTarget, "js-slider-img-click");
      });
    });

    const navNext = sliderRootElement.querySelector(".js-slider__nav--next");
    if (navNext) {
      navNext.addEventListener("click", (e) => {
        this.fireCustomEvent(sliderRootElement, "js-slider-img-next");
      });
    }

    const navPrev = sliderRootElement.querySelector(".js-slider__nav--prev");
    if (navPrev) {
      navPrev.addEventListener("click", (e) => {
        this.fireCustomEvent(sliderRootElement, "js-slider-img-prev");
      });
    }

    const zoom = sliderRootElement.querySelector(".js-slider__zoom");
    if (zoom) {
      zoom.addEventListener("click", (e) => {
        if (e.target === e.currentTarget) {
          this.fireCustomEvent(sliderRootElement, "js-slider-close");
        }
      });
    }
  }

  fireCustomEvent(element, name) {
    console.log(element.className, "=>", name);

    const event = new CustomEvent(name, {
      bubbles: true,
    });

    element.dispatchEvent(event);
  }

  initCustomEvents(imagesList, sliderRootElement, imagesSelector) {
    this.imagesList.forEach((img) => {
      img.addEventListener("js-slider-img-click", (event) => {
        this.onImageClick(event, sliderRootElement, imagesSelector);
      });
    });

    sliderRootElement.addEventListener("js-slider-img-next", () =>
      this.onImageNext()
    );
    sliderRootElement.addEventListener("js-slider-img-prev", () =>
      this.onImagePrev()
    );
    sliderRootElement.addEventListener("js-slider-close", this.onClose);
  }

  onImageClick(event, sliderRootElement, imagesSelector) {
    sliderRootElement.classList.add("js-slider--active");

    const src = this.getCurrentImageSrc(event);

    this.setCurrentImageSrc(sliderRootElement, src);

    const groupName = event.currentTarget.dataset.sliderGroupName;

    this.prepareThumbList(imagesSelector, groupName, src);
  }

  setCurrentImageSrc(sliderRootElement, currentSrc) {
    sliderRootElement.querySelector(".js-slider__image").src = currentSrc;
  }

  getCurrentImageSrc(event) {
    return event.currentTarget.querySelector("img").src;
  }

  prepareThumbList(imagesSelector, groupName, currentSrc) {
    const thumbsList = document.querySelectorAll(
      `${imagesSelector}[data-slider-group-name=${groupName}] `
    );
    const prototype = document.querySelector(
      ".js-slider__thumbs-item--prototype"
    );
    thumbsList.forEach((item) => {
      const thumbElement = this.createthumbElement(prototype);
      this.prepareThumbImg(thumbElement, item, currentSrc);

      document.querySelector(".js-slider__thumbs").appendChild(thumbElement);
    });
  }

  createthumbElement(proto) {
    const thumbElement = proto.cloneNode(true);
    thumbElement.classList.remove("js-slider__thumbs-item--prototype");
    return thumbElement;
  }
  prepareThumbImg(thumbEl, thumbsListElement, currentSrc) {
    const thumbImg = thumbEl.querySelector("img");
    thumbImg.src = thumbsListElement.querySelector("img").src;
    if (thumbImg.src === currentSrc) {
      thumbImg.classList.add("js-slider__thumbs-image--current");
    }
  }

  onImageNext(event) {
    console.log(this, "onImageNext");
    const currentClassName = "js-slider__thumbs-image--current";
    const current = document.querySelector(`.${currentClassName}`);
    const parentCurrent = current.parentElement;
    const nextElement = parentCurrent.nextElementSibling;
    if (
      nextElement &&
      !nextElement.className.includes("js-slider__thumbs-item--prototype")
    ) {
      const img = this.createImg(nextElement);
      this.addClass(img, currentClassName);
      this.removeClass(img, current, currentClassName);
    }
  }

  onImagePrev(event) {
    console.log(this, "onImagePrev");
    const currentClassName = "js-slider__thumbs-image--current";
    const current = document.querySelector(`.${currentClassName}`);
    const parentCurrent = current.parentElement;
    const prevElement = parentCurrent.previousElementSibling;
    if (
      prevElement &&
      !prevElement.className.includes("js-slider__thumbs-item--prototype")
    ) {
      const img = this.createImg(prevElement);
      this.addClass(img, currentClassName);
      this.removeClass(img, current, currentClassName);
    }
  }

  createImg(element) {
    const img = element.querySelector("img");
    return img;
  }

  addClass(img, currentClassName) {
    return img.classList.add(currentClassName);
  }

  removeClass(img, currentClass, currentClassName) {
    document.querySelector(".js-slider__image").src = img.src;
    return currentClass.classList.remove(currentClassName);
  }

  onClose(event) {
    event.currentTarget.classList.remove("js-slider--active");
    const thumbsList = document.querySelectorAll(
      ".js-slider__thumbs-item:not(.js-slider__thumbs-item--prototype)"
    );

    thumbsList.forEach((item) => item.parentElement.removeChild(item));
  }
}
