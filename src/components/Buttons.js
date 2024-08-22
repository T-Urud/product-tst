const Buttons = ({ content, onClick, isClicked }) => {
  return (
    <li>
      <button
        onClick={() => {
          onClick();
        }}
        className={
          isClicked
            ? "text-red-800 text-4xl cursor-pointer my-1 w-16 border"
            : "text-4xl cursor-pointer my-1 w-16 border"
        }
      >
        {content}
      </button>
    </li>
  );
};

export default Buttons;
