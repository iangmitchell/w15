import { useState } from "react";

function Name1() {
  const notification = "notification is-primary";
  const [name, setName] = useState("Ian");

  const handleSetName = () => {
    if (name === "Ian") setName("Sukhy");
    else setName("Ian");
  };

  return (
    <div class={notification}>
      <h2> {name} </h2>
      <button class="button is-link" onClick={handleSetName}>
        {" "}
        {name}
      </button>
    </div>
  );
}
export default Name1;
