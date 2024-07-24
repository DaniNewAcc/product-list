function ConfirmBtn({ label, onClick }) {
  return (
    <button
      className="bg-Red w-full rounded-3xl mb-4 py-3 text-white font-semibold"
      onClick={onClick}
    >
      {label}
    </button>
  );
}

export default ConfirmBtn;
