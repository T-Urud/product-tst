const Buttons = ({ content, onClick, isClicked }) => {
  return (
    <li>
      <button
        onClick={() => {
          onClick();
        }}
        className={
          isClicked ? "btn btn-neutral my-1 w-16" : "btn btn-outline my-1 w-16"
        }
      >
        {content}
      </button>
    </li>
  );
};

export default Buttons;
