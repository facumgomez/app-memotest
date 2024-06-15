import '../App.css';
import MemoBlock from './MemoBlock';
import logo from '../assets/memotest.png';

const Board = ({animation, handleMemoBlock, memoBlocks}) => {
  return (
    <div>
      <div className='logo'>
        <img src={logo} alt="Logo de Memotest Food" id='logoMemo'/>
      </div>
      <main className='board'>
        {memoBlocks.map((memoBlock, i) => {
          return <MemoBlock key= {`${i}_${memoBlock.e}`} animation={animation} handleMemoBlock={handleMemoBlock} memoBlock={memoBlock} />
        })}
      </main>
    </div>
  );
}

export default Board;