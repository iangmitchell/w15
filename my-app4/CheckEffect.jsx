import {useEffect, useState} from 'react';


function CheckEffect(){
    const [checked, setChecked] = useState(false);

    useEffect( ()=> {
        alert(`checked: ${checked.toString()}`);
    });

    return(
        <div class="block">
            <input type="checkbox" value={checked} onChange={()=>setChecked(check => !checked)} />
            {checked ? "checked" : "unchecked"}
        </div>
    );
}

export default CheckEffect;
