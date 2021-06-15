import classes from "./ImageGallery.module.css";

const ImageGallery = (...props) => {
  return props.map((img) => {
    <div
      class={`${classes.mySlides} ${classes.slide - halaltimes} ${
        classes.fade
      }`}
    >
      <img src={img.src} alt={img.alt} class={`${classes["img-slider"]}`} />
      <div class="text">
        <span class={`${classes["img-title"]}`}>{img.title}</span>
      </div>
    </div>;
  });
};

export default ImageGallery;
