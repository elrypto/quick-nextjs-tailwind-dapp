
const Button = ({children, clickAction}) => {
  return (
    <button
      type="button"
      className="px-2 py-2 text-xs bg-indigo-500 rounded-lg shadow-lg text-cray-50 hover:bg-indigo-400 focus:outline-none"
      onClick={evt => {
        evt.preventDefault();
        clickAction();
      }}
    >
      {children}
    </button>
  )
}

export default Button;