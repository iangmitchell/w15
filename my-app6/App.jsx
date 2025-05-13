import "bulma/css/bulma.css";
import "./style.css";
import Header from "./Header";
import Column from "./Column";
import Child from "./Child";
import { ________ } from "react";

const App = () => {
  const [data, setData] = useState("parent");
  const changeData = (msg) => _______(msg);
  const width = [2, 4];
  const content = [
    "profit not from thy tongue",
    "fashions fade, style is eternal",
  ];
  const style = ["has-background-info", "has-background-warning"];

  return (
    <>
      <Header />
      <div class="block">
        <div class="columns">
          <Column
            width={width[0]}
            style={style[0]}
            title="Column 1"
            content={content[0]}
          />
          <Column
            width={width[1]}
            style={style[1]}
            title="Column 2"
            content={content[1]}
          />
          <div class="______ is-6 has-background-primary">
            <section class="section">
              <div class="container">
                <h1 class="title">Column 3</h1>
                <h2 class="subtitle">Data: {____}</h2>
                <Child onChildClick={__________} />
              </div>
            </section>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
