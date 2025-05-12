import { useState } from "react";
function ArrayIntAsList() {
  const arrayInt = [51, 52, 53, 54, 55];
  const [listInt, setInt] = useState(arrayInt);
  const getRandom = () => {
    return Math.floor(Math.random() * 100);
  };
  {
    /* const handleAddIntStart = () =>{ }
    const handleAddIntEnd = ()=>{ } 
    const handleRmIntStart = ()=>{ }
    const handleRmIntEnd = ()=>{ } */
  }
  return (
    <>
      <div class="notification is-primary">
        <div class="content">
          <_l>
            {listInt.map((item, index) => {
              return (
                <li key={_____}>
                  <span> {____} </span>
                </li>
              );
            })}
          </_l>
        </div>
      </div>
      <div class="block">
        {/* <button class="button" onClick={_______________} > Add to End </button>
                <button class="button" onClick={_________________} > Add to Start </button>
                <button class="button" onClick={______________} > Remove from End </button>
                <button class="button" onClick={________________} > Remove from Start </button> */}
      </div>
    </>
  );
}
export default ArrayIntAsList;
