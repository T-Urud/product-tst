const Buttons = ({ content, onClick, isClicked }) => {
  return (
    <li>
      <button
        onClick={() => {
          onClick();
        }}
        className={isClicked ? "selected" : ""}
      >
        {content}
      </button>
    </li>
  );
};

export default Buttons;
