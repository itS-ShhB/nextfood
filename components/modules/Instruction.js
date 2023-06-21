function Instruction() {
  return (
    <div className="mb-100px">
      <h3 className="text-[#53c60b] text-2xl my-6 mx-0">How to Order?</h3>
      <ul className="p-0">
        <li className="font-medium text-lg leading-8 list-decimal ml-4">
          Sign in (or create an account) and set your delivery address.
        </li>
        <li className="font-medium text-lg leading-8 list-decimal ml-4">
          Choose the restaurant you want to order from.
        </li>
        <li className="font-medium text-lg leading-8 list-decimal ml-4">
          Select your items and tap “Add to Cart”.
        </li>
        <li className="font-medium text-lg leading-8 list-decimal ml-4">
          To place your order, select “View cart” or “Checkout”.
        </li>
        <li className="font-medium text-lg leading-8 list-decimal ml-4">
          Review your order and tap “Place Order”...
        </li>
        <li className="font-medium text-lg leading-8 list-decimal ml-4">
          Track your order progress.
        </li>
      </ul>
    </div>
  );
}

export default Instruction;
