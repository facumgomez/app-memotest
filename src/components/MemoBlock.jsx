import '../App.css';

const MemoBlock = ({animation, handleMemoBlock, memoBlock}) => (
  <div className='memoBlock' onClick={() => (!memoBlock.flipped && !animation) && handleMemoBlock(memoBlock)}>
    <div className={`memoBlockInner ${memoBlock.flipped && 'memoBlockFlipped'}`}>
      <div className='memoBlockF'>

      </div>
      <div className='memoBlockB'>
        {memoBlock.e}
      </div>
    </div>
  </div>
)

export default MemoBlock;