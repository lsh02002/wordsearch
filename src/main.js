//import logo from "./logo.svg";
import "./main.css";
//import { answers } from "./store";

//let indexGameBoard = 0;
let gameAnswers = [];
let gameBoard = [];
let gameBoardColor = [];

function generateRandomChar() {
  let _char_ = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  _char_ = possible.charAt(Math.floor(Math.random() * possible.length));
  return _char_;
}

function addNullChars() {
  for (let j = 0; j < 100; j++) {
    if (gameBoard[j] === undefined || gameBoard[j] === null) {
      let random_ascii = generateRandomChar();
      gameBoard[j] = random_ascii;
      gameBoardColor[j] = "gray";
    }
  }
}

function deletePrevChar(prev, current, skipNum) {
  let k = current - 1;

  while (k > prev) {
    gameBoard[k * skipNum] = undefined;
    k--;
  }
}

function insertCharBoard() {
  for (let i = 0; i < 27; i++) {
    if (gameAnswers[i].length === 0) continue;

    let insertMode = Math.floor(Math.random() * 3);

    if (insertMode === 0) {
      //수평 모드

      let startPos = Math.floor(Math.random() * (90 - gameAnswers[i].length));

      let k = 0;
      for (let j = startPos; j < gameAnswers[i].length + startPos; j++) {
        if (gameBoard[j] !== null && gameBoard[j] !== undefined) {
          deletePrevChar(startPos, j, 1);
          i--;
          break;
        }

        gameBoard[j] = gameAnswers[i][k];
        gameBoardColor[j] = "#FF0000";

        k++;
      }
    } else if (insertMode === 1) {
      //수직 모드
      let startPos = Math.floor(
        Math.random() * ((10 - gameAnswers[i].length) * 9)
      );

      let k = 0;
      for (let j = startPos; j < gameAnswers[i].length; j++) {
        if (gameBoard[j * 9] !== null && gameBoard[j * 9] !== undefined) {
          deletePrevChar(startPos, j, 9);
          i--;
          break;
        }

        gameBoard[j * 9] = gameAnswers[i][k];
        gameBoardColor[j * 9] = "#00FF00";

        k++;
      }
    } else if (insertMode === 2) {
      let startPos = Math.floor(
        Math.random() * ((10 - gameAnswers[i].length) * 9)
      );

      let k = 0;
      for (let j = startPos; j < gameAnswers[i].length + startPos; j++) {
        if (gameBoard[j * 8] !== null && gameBoard[j * 8] !== undefined) {
          deletePrevChar(startPos, j, 8);
          i--;
          break;
        }
        gameBoard[j * 8] = gameAnswers[i][k];
        gameBoardColor[j * 8] = "#0000FF";

        k++;
      }
    } else if (insertMode === 3) {
      let startPos = Math.floor(
        Math.random() * ((10 - gameAnswers[i].length) * 9)
      );

      let k = 0;
      for (let j = startPos; j < gameAnswers[i].length + startPos; j++) {
        if (gameBoard[j * 10] !== null && gameBoard[j * 10] !== undefined) {
          deletePrevChar(startPos, j, 10);
          i--;
          break;
        }

        gameBoard[j * 10] = gameAnswers[i][k];
        gameBoardColor[j * 10] = "#F0F0F0";

        k++;
      }
    }
  }

  addNullChars();
}

function setOneStringBoard(i2, j2) {
  const div = document.querySelector(
    `.game-box-block[data-index='${i2}${j2}']`
  );

  if (div) {
    let to1Arr = i2 * 9 + j2;
    if (gameBoard[to1Arr]) {
      div.innerText = gameBoard[to1Arr];
      div.style =
        "color: white; background-color: " + gameBoardColor[to1Arr] + ";";
      //indexGameBoard++;
    }
  }
}

function handleClick() {
  //indexGameBoard = 0;
  gameBoard = [];
  gameBoardColor = [];

  insertCharBoard();

  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      setOneStringBoard(i, j);
    }
  }
}

const getInputText = () => {
  let answers = gameAnswers;
  let k = 0;

  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 3; j++) {
      /*const input = document.querySelector(
        `.form-board-block[data-index='${i}${j}']`
      );
      */
      const title = document.querySelector(`[name='title${i}${j}']`);
      //const title = document.querySelector(`[name='title${i}${j}']`).value;

      if (title !== null && title !== undefined) {
        if (title.value !== null && title.value !== undefined) {
          answers[k] = title.value;
          k++;
        }
      }
    }
  }
  answers[k] = "";

  //sessionStorage.setItem("answers", JSON.stringify(answers));
};

const handleSubmit = (event) => {
  event.preventDefault();
  getInputText();

  const sub = document.querySelector(".form-submit");
  sub.style = "color: white; background-color: green";
  sub.innerHTML = "옆칸의 실행 버튼을 눌러보세요!!!";
};

function Main() {
  return (
    <div class="app-main-box">
      <div class="main-box">
        <div class="main-box-message">Manage existing puzzles here</div>
        <div class="main-form">
          <form class="word-form" onSubmit={handleSubmit}>
            Title
            <br />
            <input type="text" name="title" alt="title" />
            <br />
            Description
            <br />
            <input type="text" name="description" alt="description" />
            <br />
            Word List
            <br />
            <div class="word-form-message">
              Between 10 and 30 words. Puzzles are randomly generated using a
              selection of your words at play time.
            </div>
            <div class="form-board-row row00">
              <div class="form-board-block" data-index="00">
                <input type="text" name="title00" alt="title00" />
              </div>
              <div class="form-board-block" data-index="01">
                <input type="text" name="title01" alt="title01" />
              </div>
              <div class="form-board-block" data-index="02">
                <input type="text" name="title02" alt="title02" />
              </div>
            </div>
            <div class="form-board-row row01">
              <div class="form-board-block" data-index="10">
                <input type="text" name="title10" alt="title10" />
              </div>
              <div class="form-board-block" data-index="11">
                <input type="text" name="title11" alt="title11" />
              </div>
              <div class="form-board-block" data-index="12">
                <input type="text" name="title12" alt="title12" />
              </div>
            </div>
            <div class="form-board-row row02">
              <div class="form-board-block" data-index="20">
                <input type="text" name="title20" alt="title20" />
              </div>
              <div class="form-board-block" data-index="21">
                <input type="text" name="title21" alt="title21" />
              </div>
              <div class="form-board-block" data-index="22">
                <input type="text" name="title22" alt="title22" />
              </div>
            </div>
            <div class="form-board-row row03">
              <div class="form-board-block" data-index="30">
                <input type="text" name="title30" alt="title30" />
              </div>
              <div class="form-board-block" data-index="31">
                <input type="text" name="title31" alt="title31" />
              </div>
              <div class="form-board-block" data-index="32">
                <input type="text" name="title32" alt="title32" />
              </div>
            </div>
            <div class="form-board-row row04">
              <div class="form-board-block" data-index="40">
                <input type="text" name="title40" alt="title40" />
              </div>
              <div class="form-board-block" data-index="41">
                <input type="text" name="title41" alt="title41" />
              </div>
              <div class="form-board-block" data-index="42">
                <input type="text" name="title42" alt="title42" />
              </div>
            </div>
            <div class="form-board-row row05">
              <div class="form-board-block" data-index="50">
                <input type="text" name="title50" alt="title50" />
              </div>
              <div class="form-board-block" data-index="51">
                <input type="text" name="title51" alt="title51" />
              </div>
              <div class="form-board-block" data-index="52">
                <input type="text" name="title52" alt="title52" />
              </div>
            </div>
            <div class="form-board-row row06">
              <div class="form-board-block" data-index="60">
                <input type="text" name="title60" alt="title60" />
              </div>
              <div class="form-board-block" data-index="61">
                <input type="text" name="title61" alt="title61" />
              </div>
              <div class="form-board-block" data-index="62">
                <input type="text" name="title62" alt="title62" />
              </div>
            </div>
            <div class="form-board-row row07">
              <div class="form-board-block" data-index="70">
                <input type="text" name="title70" alt="title70" />
              </div>
              <div class="form-board-block" data-index="71">
                <input type="text" name="title71" alt="title71" />
              </div>
              <div class="form-board-block" data-index="72">
                <input type="text" name="title72" alt="title72" />
              </div>
            </div>
            <div class="form-board-row row08">
              <div class="form-board-block" data-index="80">
                <input type="text" name="title80" alt="title80" />
              </div>
              <div class="form-board-block" data-index="81">
                <input type="text" name="title81" alt="title81" />
              </div>
              <div class="form-board-block" data-index="82">
                <input type="text" name="title82" alt="title82" />
              </div>
            </div>
            <div class="form-board-row row09">
              <div class="form-board-block" data-index="90">
                <input type="text" name="title90" alt="title90" />
              </div>
              <div class="form-board-block" data-index="91">
                <input type="text" name="title91" alt="title91" />
              </div>
              <div class="form-board-block" data-index="92">
                <input type="text" name="title92" alt="title92" />
              </div>
            </div>
            <div class="form01-subject">
              Subject
              <br />
              <input type="radio" name="check-01" alt="check-01" />
              Myself, family, friends etc
              <input type="radio" name="check-02" alt="check-02" />
              Non-Personal (recommended)
              <br />
            </div>
            <button class="form-submit" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div class="game-box">
        <button class="run-btn" onClick={handleClick}>
          실행
        </button>
        <div class="game-box-row g-row00">
          <div class="game-box-block" data-index="00"></div>
          <div class="game-box-block" data-index="01"></div>
          <div class="game-box-block" data-index="02"></div>
          <div class="game-box-block" data-index="03"></div>
          <div class="game-box-block" data-index="04"></div>
          <div class="game-box-block" data-index="05"></div>
          <div class="game-box-block" data-index="06"></div>
          <div class="game-box-block" data-index="07"></div>
          <div class="game-box-block" data-index="08"></div>
          <div class="game-box-block" data-index="09"></div>
        </div>
        <div class="game-box-row g-row01">
          <div class="game-box-block" data-index="10"></div>
          <div class="game-box-block" data-index="11"></div>
          <div class="game-box-block" data-index="12"></div>
          <div class="game-box-block" data-index="13"></div>
          <div class="game-box-block" data-index="14"></div>
          <div class="game-box-block" data-index="15"></div>
          <div class="game-box-block" data-index="16"></div>
          <div class="game-box-block" data-index="17"></div>
          <div class="game-box-block" data-index="18"></div>
          <div class="game-box-block" data-index="19"></div>
        </div>
        <div class="game-box-row g-row02">
          <div class="game-box-block" data-index="20"></div>
          <div class="game-box-block" data-index="21"></div>
          <div class="game-box-block" data-index="22"></div>
          <div class="game-box-block" data-index="23"></div>
          <div class="game-box-block" data-index="24"></div>
          <div class="game-box-block" data-index="25"></div>
          <div class="game-box-block" data-index="26"></div>
          <div class="game-box-block" data-index="27"></div>
          <div class="game-box-block" data-index="28"></div>
          <div class="game-box-block" data-index="29"></div>
        </div>
        <div class="game-box-row g-row03">
          <div class="game-box-block" data-index="30"></div>
          <div class="game-box-block" data-index="31"></div>
          <div class="game-box-block" data-index="32"></div>
          <div class="game-box-block" data-index="33"></div>
          <div class="game-box-block" data-index="34"></div>
          <div class="game-box-block" data-index="35"></div>
          <div class="game-box-block" data-index="36"></div>
          <div class="game-box-block" data-index="37"></div>
          <div class="game-box-block" data-index="38"></div>
          <div class="game-box-block" data-index="39"></div>
        </div>
        <div class="game-box-row g-row04">
          <div class="game-box-block" data-index="40"></div>
          <div class="game-box-block" data-index="41"></div>
          <div class="game-box-block" data-index="42"></div>
          <div class="game-box-block" data-index="43"></div>
          <div class="game-box-block" data-index="44"></div>
          <div class="game-box-block" data-index="45"></div>
          <div class="game-box-block" data-index="46"></div>
          <div class="game-box-block" data-index="47"></div>
          <div class="game-box-block" data-index="48"></div>
          <div class="game-box-block" data-index="49"></div>
        </div>
        <div class="game-box-row g-row05">
          <div class="game-box-block" data-index="50"></div>
          <div class="game-box-block" data-index="51"></div>
          <div class="game-box-block" data-index="52"></div>
          <div class="game-box-block" data-index="53"></div>
          <div class="game-box-block" data-index="54"></div>
          <div class="game-box-block" data-index="55"></div>
          <div class="game-box-block" data-index="56"></div>
          <div class="game-box-block" data-index="57"></div>
          <div class="game-box-block" data-index="58"></div>
          <div class="game-box-block" data-index="59"></div>
        </div>
        <div class="game-box-row g-row06">
          <div class="game-box-block" data-index="60"></div>
          <div class="game-box-block" data-index="61"></div>
          <div class="game-box-block" data-index="62"></div>
          <div class="game-box-block" data-index="63"></div>
          <div class="game-box-block" data-index="64"></div>
          <div class="game-box-block" data-index="65"></div>
          <div class="game-box-block" data-index="66"></div>
          <div class="game-box-block" data-index="67"></div>
          <div class="game-box-block" data-index="68"></div>
          <div class="game-box-block" data-index="69"></div>
        </div>
        <div class="game-box-row g-row07">
          <div class="game-box-block" data-index="70"></div>
          <div class="game-box-block" data-index="71"></div>
          <div class="game-box-block" data-index="72"></div>
          <div class="game-box-block" data-index="73"></div>
          <div class="game-box-block" data-index="74"></div>
          <div class="game-box-block" data-index="75"></div>
          <div class="game-box-block" data-index="76"></div>
          <div class="game-box-block" data-index="77"></div>
          <div class="game-box-block" data-index="78"></div>
          <div class="game-box-block" data-index="79"></div>
        </div>
        <div class="game-box-row g-row08">
          <div class="game-box-block" data-index="80"></div>
          <div class="game-box-block" data-index="81"></div>
          <div class="game-box-block" data-index="82"></div>
          <div class="game-box-block" data-index="83"></div>
          <div class="game-box-block" data-index="84"></div>
          <div class="game-box-block" data-index="85"></div>
          <div class="game-box-block" data-index="86"></div>
          <div class="game-box-block" data-index="87"></div>
          <div class="game-box-block" data-index="88"></div>
          <div class="game-box-block" data-index="89"></div>
        </div>
        <div class="game-box-row g-row09">
          <div class="game-box-block" data-index="90"></div>
          <div class="game-box-block" data-index="91"></div>
          <div class="game-box-block" data-index="92"></div>
          <div class="game-box-block" data-index="93"></div>
          <div class="game-box-block" data-index="94"></div>
          <div class="game-box-block" data-index="95"></div>
          <div class="game-box-block" data-index="96"></div>
          <div class="game-box-block" data-index="97"></div>
          <div class="game-box-block" data-index="98"></div>
          <div class="game-box-block" data-index="99"></div>
        </div>
      </div>
    </div>
  );
}

export default Main;
