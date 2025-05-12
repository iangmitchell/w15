import "bulma/css/bulma.css";
import Column from "./Column";
import Header from "./Header";
import "./style.css";
const colWidths = [3, 6, 3];

function App() {
  return (
    <>
      <Header />
      <div class="columns">
        <Column
          title="Column 1"
          widths={____________}
          bg="has-background-info"
        />
        <Column
          title="Column 2"
          widths={____________}
          bg="has-background-warning"
        />
        <Column
          title="Column 3"
          widths={____________}
          bg="has-background-danger"
        />
      </div>
    </>
  );
}
export default App;
