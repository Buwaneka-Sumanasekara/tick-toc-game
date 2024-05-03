import './App.css';
import Board from './components/Board';
import ToolBar from './components/ToolBar';
import useGameOperations from './hooks/useGameOperations';


const size=3;

function App() {

  const { board, handleOnPress, onResetBoard, getDisplayMessage,getWinCombination } = useGameOperations(size)

  const combination=getWinCombination();
  return (
    <div className="App">
      <ToolBar onResetPress={onResetBoard} message={getDisplayMessage()} />
      <Board combination={combination} board={board} handleOnPress={handleOnPress} size={size} />
    </div>
  );
}

export default App;
