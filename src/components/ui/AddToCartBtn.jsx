function AddToCartBtn({ icon, altText, classes, label, onAddItem }) {
  return (
    <button className={classes} onClick={onAddItem}>
      <img src={icon} alt={altText} />
      {label}
    </button>
  );
}

export default AddToCartBtn;
