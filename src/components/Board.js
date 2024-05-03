import Box from "./Box";


const Board = (props) => {
    const {board,handleOnPress,combination}=props

    return (
        <div className='board'>
        {board.map((item,i)=>{
            const isWinV=(!!combination?(combination.some(v=>(v===i))):false)
            
            return <Box isWinV={isWinV} key={`box_${i}`} value={item} handleOnPress={()=>handleOnPress(i)}/>
        })}
    </div>
    )

}

export default Board;