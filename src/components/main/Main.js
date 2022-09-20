import {Cards} from "../cards/Cards";
import {ChangeText} from "../changeText/ChangeText";
import {Modal} from "../modal/Modal";

function Main() {

    return (
        <main className={'main'}>
            <ChangeText/>
            <Cards/>
            <Modal/>
        </main>
    );
}

export {Main};