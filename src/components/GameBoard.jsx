import React, { useState } from "react";
import styles from "../css/GameBoard.module.css";

const GameBoard = () => {
  const [rosicSize, setRosicSize] = useState([]);
  const [gridNum, setGridNum] = useState();
  const [inputText, setInputText] = useState([]);
  const [inputTextGrid, setInputTextGrid] = useState([]);
  let sizeNum = [];
  let inputTxt = [];
  let inputTxtGrid = [];
  const setSize = (num) => {
    setGridNum(num);
    for (let i = 0; i < num * num; i++) {
      sizeNum.push({ num: i, color: "n" });
    }
    if (num % 2 == 0) {
      for (let i = 0; i < num / 2; i++) {
        inputTxt.push(i);
      }
    } else {
      for (let i = 0; i < (num + 1) / 2; i++) {
        inputTxt.push(i);
      }
    }
    for (let i = 0; i < num; i++) {
      inputTxtGrid.push(i);
    }
    setRosicSize(sizeNum);
    setInputText(inputTxt);
    setInputTextGrid(inputTxtGrid);
  };

  const handleColor = (key) => {
    if (rosicSize[key].color === "n") {
      rosicSize[key] = { num: key, color: "y" };
    } else {
      rosicSize[key] = { num: key, color: "n" };
    }
    setRosicSize([...rosicSize]);
  };

  // CSS
  const game_board = {
    display: "grid",
    border: "solid black 1px",
    gridTemplateColumns: `repeat(${gridNum}, 50px)`,
    gridTemplateRows: `repeat(${gridNum}, 50px)`,
  };

  return (
    <div className={styles.game_board_box}>
      <div>
        <button
          onClick={() => {
            setSize(10);
          }}
        >
          10X10
        </button>
        <button
          onClick={() => {
            setSize(20);
          }}
        >
          20X20
        </button>
        <button
          onClick={() => {
            setSize(30);
          }}
        >
          30X30
        </button>
      </div>
      <br />
      {inputText.map(() => {
        return (
          <div className={styles.game_board_content_box}>
            {inputTextGrid.map(() => {
              return (
                <div className={styles.game_board_input_top_box}>
                  <input className={styles.game_board_input_top} type="text" />
                </div>
              );
            })}
          </div>
        );
      })}
      <div className={styles.game_board_content_box}>
        {inputText.map(() => {
          return (
            <div className={styles.game_board_content_side}>
              {inputTextGrid.map(() => {
                return (
                  <div className={styles.game_board_input_bottom_box}>
                    <input
                      className={styles.game_board_input_bottom}
                      type="text"
                    />
                  </div>
                );
              })}
            </div>
          );
        })}

        <div style={game_board}>
          {rosicSize.map((key) => {
            return (
              <div className={styles.game_board_content} key={key.num}>
                <button
                  className={
                    key.color === "n"
                      ? `${styles.game_board_btn_n}`
                      : `${styles.game_board_btn_y}`
                  }
                  onClick={() => {
                    handleColor(key.num);
                  }}
                ></button>
              </div>
            );
          })}
        </div>
        {inputText.map(() => {
          return (
            <div className={styles.game_board_content_side}>
              <div
                className={styles.game_board_input_bottom_box}
                style={{ borderColor: "white" }}
              ></div>
              <div
                className={styles.game_board_input_bottom_box}
                style={{ borderColor: "white" }}
              ></div>
              <div
                className={styles.game_board_input_bottom_box}
                style={{ borderColor: "white" }}
              ></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GameBoard;
