import React from "react";
import "../index.css";

interface MainScreenProps {
  from: number;
  to: number;
}
interface BlockProps {
  className: string;
}
const Block: React.FC<BlockProps> = ({ className }) => {
  return <div className={className}></div>;
};

const MemoizedBlock = React.memo(Block);

const MainScreen: React.FC<MainScreenProps> = ({ from, to }) => {
  const generateBlocks = React.useMemo(() => {
    const blocks = [];

    for (let i = from; i < to; i++) {
      blocks.push(<MemoizedBlock key={i} className={`block${i}`} />);
    }

    return blocks;
  }, [from, to]);
  const generateBlocksMin = () => {
    const blocks = [];

    for (let i = 22; i > 0; i--) {
      blocks.push(<div key={i} className={`block${i}`}></div>);
    }

    return blocks;
  };
  const Block = ({ className }: any) => {
    return (
      <div className={className}>
        <div className="block1"></div>
        <div className="block1"></div>
        {generateBlocks}
        {generateBlocksMin()}
        <div className="block1"></div>
        <div className="block1"></div>
      </div>
    );
  };

  return (
    <div className="flex justify-between items-center">
      <Block className="main flex flex-col items-start gap-[10px]" />
      <div className="flex flex-col">
        <h1 className="h1 w-[320px]">One button to stable all your funds</h1>
        <p className="p top-[40px] relative flex justify-center">
          (Connect your wallet to continue)
        </p>
      </div>
      <Block className="main flex flex-col items-start gap-[10px] rotate-180" />
    </div>
  );
};

export default MainScreen;
