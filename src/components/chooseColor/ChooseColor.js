import {useDispatch, useSelector} from "react-redux";

import {setFontColor} from "../../redux/slices/toolsSlice";
import {colors} from "../../services/colors-service";
import '../../styles/chooseColor-style.css';

function ChooseColor() {

    const dispatch = useDispatch();

    const fontColor = useSelector(state => state.toolsReducer.fontColor);

    const isChosen = (item) => {
        return fontColor === item;
    };

    return (
        <div className={'colors__wrapper'}>
            <h4>Виберіть колір шрифта</h4>
            <div className={'colors__container'}>
                {
                    colors.map(color => <div
                        // className={'color-icon'}
                        className={isChosen(color.hex) ? 'color-icon chosen' : 'color-icon'}
                        key={color.id}
                        style={{backgroundColor: `${color.hex}`}}
                        onClick={() => dispatch(setFontColor(color.hex))}
                    >
                    </div>)
                }
            </div>
        </div>
    );

}

export {ChooseColor};