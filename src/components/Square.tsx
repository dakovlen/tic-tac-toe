import React, { FC } from 'react'

interface PropsSquare {
  value?: any,
  onSquareClick: any,
}

const Square: FC<PropsSquare> = ({value, onSquareClick}) => {
  // const [ value, setValue ] = useState<any | null>(null)

  // function handleClick() {
  //   setValue('X');
  // }
  
  return (
    <button 
      className="square"
      onClick={onSquareClick}
      >
        {value}
    </button>
  )
}

export default Square