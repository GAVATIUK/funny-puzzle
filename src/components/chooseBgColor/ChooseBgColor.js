import {useDispatch, useSelector} from "react-redux";

import {setBgColor, setBgIsActive} from "../../redux/slices/toolsSlice";
import {bgColors} from "../../services/colors-service";
import '../../styles/chooseBgColor-style.css';


function ChooseBgColor() {

    const dispatch = useDispatch();

    const isActive = useSelector(state => state.toolsReducer.bgIsActive);
    const bgColor = useSelector(state => state.toolsReducer.bgColor);

    const isChosen = (item) => {
        return bgColor === item;
    };

    return (
        <div className={isActive ? 'text-background__wrapper bg-active' : 'text-background__wrapper'}>

            <div className={'text-background__btn'}>

                <div className={isActive ? 'btn bg-green checked' : 'btn'}
                     onClick={() => dispatch(setBgIsActive(!isActive))}>

                </div>

                <h3 className={'btn__title'}>Використовувати підкладку?</h3>
            </div>

            <div className={'options__line'}></div>

            <div className={'text-background__colors'}>

                <div className={'background-colors__title'}>Виберіть колір підкладки</div>

                <div className={'background-colors__container'}>
                    {
                        bgColors.map(color =>
                            <div
                                key={color.id}
                                style={{backgroundColor: color.hex}}
                                onClick={() => dispatch(setBgColor(color.hex))}
                                className={isChosen(color.hex) ? 'color-icon chosen' : 'color-icon'}
                            >
                            </div>)
                    }
                </div>

            </div>

        </div>
    );

}

export {ChooseBgColor};