import {Main, Header} from "./components";
import './styles/general-style.css';
import {useSelector} from "react-redux";


function App() {

    console.log(useSelector(state => state.toolsReducer.cards));

    return (
        <div className={'app'}>
            <Header/>
            <Main/>
            {/*<ChooseColor/>*/}
        </div>
    );
}

export default App;
