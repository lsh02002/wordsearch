//import logo from "./logo.svg";
import "./main.css";
//import { answers } from "./store";

const getInputText = () => {
  let answers = [];
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

  alert(answers);
  sessionStorage.setItem("answers", JSON.stringify(answers));
};

const handleSubmit = (event) => {
  event.preventDefault();
  getInputText();

  window.open("/game", "game", "popup=yes");
};

function Main() {
  return (
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
  );
}

export default Main;
