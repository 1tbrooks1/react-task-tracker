function Button({ color, text, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: color }}
      className="btn"
    >
      {text}
    </button>
  );
}

export default Button;

// Button.defaultProps = {
//     color: 'steelBlue'
// }

// Button.protoTypes = {
//     text: PropTypes.string,
//     color: PropTypes.string
// onclick: PropTypes.func;
// }
