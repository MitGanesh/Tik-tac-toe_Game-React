import React, { useState } from 'react'
import '../App.css';
import Icon from './Icon';
import { motion } from 'framer-motion';

const array = new Array(9).fill("null")

function Home() {
  const [isCross, setisCross] = useState(false);
  const [winMessage, setwinMessage] = useState("");
  const [flag, setflag] = useState(false);

  let nullCount = 9;

  function changeIcon(index) {
    // console.log("Cell Cliked");
    if (winMessage) {
      console.log("You Win the Game");
    }
    if (array[index] === 'null') {
      array[index] = isCross ? "cross" : "circle";
      setisCross(!isCross)
    } else {
      alert("Already Filled !")
    }
    checkWinner()
    checkForDraw()
    console.log(flag);
  }

  function checkWinner() {
    if (array[0] === array[1] && array[0] === array[2] && array[0] !== "null") {
      setwinMessage(`${array[0]} won the Game`);
    } else if (array[3] === array[4] && array[3] === array[5] && array[3] !== "null") {
      setwinMessage(`${array[3]} won the Game`);
    } else if (array[6] === array[7] && array[6] === array[8] && array[6] !== "null") {
      setwinMessage(`${array[6]} won the Game`);
    } else if (array[0] === array[3] && array[0] === array[6] && array[0] !== "null") {
      setwinMessage(`${array[0]} won the Game`);
    } else if (array[1] === array[4] && array[1] === array[7] && array[1] !== "null") {
      setwinMessage(`${array[1]} won the Game`);
    } else if (array[2] === array[5] && array[2] === array[8] && array[2] !== "null") {
      setwinMessage(`${array[2]} won the Game`);
    } else if (array[0] === array[4] && array[0] === array[8] && array[0] !== "null") {
      setwinMessage(`${array[0]} won the Game`);
    } else if (array[2] === array[4] && array[2] === array[6] && array[2] !== "null") {
      setwinMessage(`${array[2]} won the Game`);
    }
  }

  function reload() {
    // console.log("Reload Game");
    setisCross(false);
    setwinMessage("");
    array.fill('null', 0, 9);
    setflag(false);
  }

  function checkForDraw() {
    array.forEach(ele => {
      if (ele !== 'null') {
        nullCount--;
        // console.log(nullCount);
        if (nullCount === 0) {
          setflag(true);
        }
      }
    });
  }

  return (
    <center>
      <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        exit={{opacity:0}}
        transition={{duration:3}}
      >
        {winMessage ? (
          <div className='msg'>
            <h1 className='text-uppercase'>{winMessage}</h1>
            <button type="button" className="resetBtn" onClick={reload}>Reset</button>
          </div>
        ) : (
          <div className='msg'>
            {
              flag ? (
                <h1 className='text-uppercase'>match draw!</h1>
              ) : (
                <h1 className='text-uppercase'>Draw {isCross ? "Cross" : "Circle"}</h1>
              )
            }
            {flag && <button type="button" className="resetBtn" onClick={reload}>Reset</button>}
          </div>
        )}

        <div className='grid'>
          {
            array.map((ele, index) => {
              return (
                <div key={index} onClick={() => { changeIcon(index) }}>
                  <div className="box">
                    <Icon name={ele} />
                  </div>
                </div>
              )
            })
          }
        </div>
      </motion.div>
    </center>

  );
}

export default Home;
