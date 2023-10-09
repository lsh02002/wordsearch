import "./game.css";

let gameAnswers = JSON.parse(sessionStorage.getItem("answers"));
//let indexGameBoard = 0;
let gameBoard = [];
let gameBoardColor = [];

function generateRandomChar() {
  let _char_ = "";
  let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  _char_ = possible.charAt(Math.floor(Math.random() * possible.length));
  return _char_;
}

function addNumllChars() {
  for (let j = 0; j < 100; j++) {
    if (gameBoard[j] === undefined || gameBoard[j] === null) {
      let random_ascii = generateRandomChar();
      gameBoard[j] = random_ascii;
      gameBoardColor[j] = "gray";
    }
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
        gameBoard[j] = gameAnswers[i][k];
        gameBoardColor[j] = "#FF0000";

        k++;
      }
    } else if (insertMode === 1) {
      //수직 모드
      //let startPos = Math.floor(Math.random() * (90 - gameAnswers[i].length));

      let k = 0;
      for (let j = 0; j < gameAnswers[i].length; j++) {
        gameBoard[j * 9] = gameAnswers[i][k];
        gameBoardColor[j * 9] = "#00FF00";

        k++;
      }
    } else if (insertMode === 2) {
      let startPos = Math.floor(Math.random() * (90 - gameAnswers[i].length));

      let k = 0;
      for (let j = startPos; j < gameAnswers[i].length + startPos; j++) {
        gameBoard[j * 8] = gameAnswers[i][k];
        gameBoardColor[j * 8] = "#0000FF";

        k++;
      }
    } else if (insertMode === 3) {
      let startPos = Math.floor(Math.random() * (90 - gameAnswers[i].length));

      let k = 0;
      for (let j = startPos; j < gameAnswers[i].length + startPos; j++) {
        gameBoard[j * 10] = gameAnswers[i][k];
        gameBoardColor[j * 10] = "#F0F0F0";

        k++;
      }
    }
  }

  addNumllChars();
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

function Game() {
  return (
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
  );
}

export default Game;
