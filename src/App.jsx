import { useEffect, useState } from 'react';
import './App.css';
import Board from './components/Board';
const emojis = [...'🍕🍔🍟🌭🥐🍩🌮🍪'];

const App = () => {
  const [shuffledMemoBlock, setShuffledMemoBlock] = useState([]);
  const [selectMemoBlock, setSelectMemoBlock] = useState(null);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    const shuffledEmojis = shuffledArray([...emojis, ...emojis]);
    setShuffledMemoBlock(shuffledEmojis.map((e,i) => ({index: i, e, flipped: false})));
  }, [])
  const shuffledArray = a => {
    for (let i = a.length - 1; i > 0; i-- ) {
      const j = Math.floor(Math.random() * i + 1);
      [a[i], a[j]] = [a[j], a[i]];
    };
    return a;
  };

  const handleMemoBlock = memoBlock => {
    const flippedMemoBlock = {...memoBlock, flipped: true};
    let shuffledMemoBlockCopy = [...shuffledMemoBlock];

    shuffledMemoBlockCopy.splice(memoBlock.index, 1, flippedMemoBlock);
    setShuffledMemoBlock(shuffledMemoBlockCopy);
    if (selectMemoBlock === null) {
      setSelectMemoBlock(memoBlock);
    } else if (selectMemoBlock.e === memoBlock.e) {
      setSelectMemoBlock(null);
    } else {
      setAnimation(true);
      setTimeout(() => {
        shuffledMemoBlockCopy.splice(memoBlock.index, 1, memoBlock);
        shuffledMemoBlockCopy.splice(selectMemoBlock.index, 1, selectMemoBlock);
        setShuffledMemoBlock(shuffledMemoBlockCopy);
        setSelectMemoBlock(null);
        setAnimation(false);
      }, 1000);
    };
  };

  return (
    <Board memoBlocks={shuffledMemoBlock} animation={animation} handleMemoBlock={handleMemoBlock} />
  );
}

export default App;
