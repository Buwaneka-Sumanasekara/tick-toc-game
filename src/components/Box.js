

const Box = (props) => {
    const {value,handleOnPress,isWinV}=props;
    return (
        <div className={`box ${isWinV?"box-selected":""}`} onClick={handleOnPress}>
            {value}
        </div>
    )
}

export default Box;