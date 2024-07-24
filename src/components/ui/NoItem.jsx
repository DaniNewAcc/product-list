import emptyCartImg from '/images/illustration-empty-cart.svg'

function NoItem() {
  return (
    <div className="flex flex-col py-10 mt-4">
      <img className="mx-auto" src={emptyCartImg} alt="Empty Cart" />
      <p className="text-center text-Rose500 font-semibold py-4">
        Your added items will appear here
      </p>
    </div>
  );
}

export default NoItem;
