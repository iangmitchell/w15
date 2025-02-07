import '../node_modules/bulma/css/bulma.css';
//import Column from './Column.js';
import Header from './Header.js';
import Name3 from './Name3.js';
import CheckEffect from './CheckEffect.js';
import ArrayIntAsList from './ArrayIntAsList.js';
const colWidths=[3,6,3];
function App() {
  return (
  <>
  <Header/>
  {/* <ArrayIntAsList/> */}
  {/* <Name1/>*/}
  {/* <Name2/>*/}
  {/* <Name3/> */}
  <CheckEffect/>
  {/*!-- w15 ex1
  <div cass="columns">
      <Column title="Column 1" widths={colWidths[0]} bg="has-background-info" />
      <Column title="Column 2" widths={colWidths[1]} bg="has-background-warning"/>
      <Column title="Column 3" widths={colWidths[2]} bg="has-background-danger"/>
    </div>
  */}
  </>
 );
}
export default App;
