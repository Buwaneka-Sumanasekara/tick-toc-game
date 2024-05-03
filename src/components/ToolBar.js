

const ToolBar = (props) => {
  const {message,onResetPress}=props;
    return <div className="tool-bar">
        <div className="message">{message}</div>
        <button onClick={onResetPress} >Reset</button>
    </div>
}

export default ToolBar;