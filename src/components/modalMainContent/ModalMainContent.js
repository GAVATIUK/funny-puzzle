import {useDispatch, useSelector} from "react-redux";

import {setIcon} from "../../redux/slices/toolsSlice";
import {bed, bedIcon, woman, womanIcon} from "../../pictures";
import '../../styles/modalMainContent-style.css';


function ModalMainContent({modalStyle, modalValue}) {

    const fontColor = useSelector(state => state.toolsReducer.fontColor);
    const bgIsActive = useSelector(state => state.toolsReducer.bgIsActive);
    const bgColor = useSelector(state => state.toolsReducer.bgColor);
    const value = useSelector(state => state.toolsReducer.modalInputValue);
    const icon = useSelector(state => state.toolsReducer.icon);
    const fontSize = useSelector(state => state.toolsReducer.fontSize);

    const dispatch = useDispatch();

    const textShadow = (item) => {
        if (bgIsActive) {
            return ` -4px 1px 6px ${item}, 
        -6px 0 6px ${item},
         -5px 5px 6px ${item}, 
         -3px 3px 6px ${item}, 
         -1px 1px 6px ${item}, 
         1px -1px 6px ${item}, 
         3px -3px 6px ${item}, 
         5px -5px 6px ${item}, 
         7px -7px 6px ${item}`
        }
    }

    return (
        <div className={'modal__main-content'}>
            {
                icon ?
                    <div className={'main-content__bed main-content-general'}>

                        <div className={'content-bed__title main-content__title'}>
                            <h2 className={modalStyle}
                                style={
                                    {
                                        fontSize: `${fontSize}px`,
                                        color: `${fontColor}`,
                                    }
                                }>
                                {value ? value : modalValue}
                            </h2>
                            <span className={modalStyle}
                                style={
                                    {
                                        fontSize: `${fontSize}px`,
                                        color: `${fontColor}`,
                                        webkitTextStroke: `30px ${bgColor}` ,
                                    }
                                }>
                                {value ? value : modalValue}
                            </span>
                        </div>

                        <div className={'content__bed'}>
                            <img src={bed} alt="bed"/>
                        </div>

                    </div>
                    :
                    <div className={'main-content__woman main-content-general'}>

                        <div className={'content-woman__title main-content__title'}>
                            <h2 className={modalStyle}
                                style={
                                    {
                                        fontSize: `${fontSize}px`,
                                        color: `${fontColor}`,
                                    }
                                }>
                                {value ? value : modalValue}
                            </h2>
                            <span className={modalStyle}
                                style={
                                    {
                                        fontSize: `${fontSize}px`,
                                        color: `${fontColor}`,
                                        webkitTextStroke: `30px ${bgColor}` ,
                                    }
                                }>
                                {value ? value : modalValue}
                            </span>
                        </div>

                        <div className={'content-woman'}>

                            <div className={'ruler'}>
                                <p>160 cм.</p>

                                <div className={'ruler__line'}>
                                    <div className={'line-x'}> </div>
                                    <div className={'line-y'}>

                                    </div>
                                </div>

                            </div>

                            <img src={woman} alt="woman"/>

                        </div>

                    </div>
            }


            <div className={'main-content__icons'}>

                <div className={icon ? 'icon green-border' : 'icon grey-border'}
                     onClick={() => dispatch(setIcon(true))}
                >
                    <img src={bedIcon} alt="bed icon"/>
                </div>

                <div className={icon ? 'icon grey-border' : 'icon green-border'}
                     onClick={() => dispatch(setIcon(false))}
                >
                    <img src={womanIcon} alt="woman icon"/>
                </div>

            </div>

        </div>
    );

}

export {ModalMainContent};