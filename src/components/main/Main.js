import {useState} from "react";

import {Cards} from "../cards/Cards";
import {ChangeText} from "../changeText/ChangeText";

function Main() {

    const [value, setValue] = useState('Enter your text');

    return (
        <main className={'main'}>
            <ChangeText setValue={setValue} value={value}/>
            <Cards value={value}/>
        </main>
    );

}

export {Main}