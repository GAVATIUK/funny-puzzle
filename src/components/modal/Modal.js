import {useDispatch, useSelector} from "react-redux";
import {useRef} from "react";

import {ChooseColor, Select, ChooseBgColor, ModalMainContent, ChooseFontSize} from "../index";
import {returnDefault, setModalInputValue} from "../../redux/slices/toolsSlice";
import '../../styles/modal-style.css';

function Modal() {

    const dispatch = useDispatch();

    const isActive = useSelector(state => state.toolsReducer.isActive);
    const modalValue = useSelector(state => state.toolsReducer.modalValue);
    const modalStyle = useSelector(state => state.toolsReducer.modalStyle);

    const ref = useRef();
    const handleClick = () => {
        dispatch(returnDefault());
        ref.current.value = '';
    };

    const handleChange = (e) => dispatch(setModalInputValue(e.target.value));


    ///////////////////////////////// це походу костиль, але я по іншому поки не знаю як  //////////////////////////////

    const stopScrolling = () => {
        document.body.style.overflow = "hidden";
    };
    const returnScroll = () => {
        document.body.style.overflow = "auto";
    };

    isActive ? stopScrolling() : returnScroll();


    return (

        <div className={isActive ? 'modal active' : 'modal'}
             onClick={handleClick}>

            <div className={isActive ? 'modal__wrapper wrapper active' : 'modal__wrapper wrapper'}
                 onClick={e => e.stopPropagation()}>

                <div className={'modal__container'}>

                    <div className={'modal__header'}>
                        <h1 className={'modal__header-title'}>Налаштуйте свій стиль</h1>

                        <div className={'modal__header-btn'}
                             onClick={handleClick}>

                        </div>

                    </div>

                    <div className={'modal__line'}></div>

                    <div className={'modal__content-container'}>

                        <ModalMainContent modalStyle={modalStyle} modalValue={modalValue}/>

                        <div className={'modal__options'}>

                            <h3 className={'options__subtitle'}>Надпис</h3>

                            <div className={'options__input'}>
                                <input type="text"
                                       ref={ref}
                                       placeholder={'Введіть підпис'}
                                       onChange={handleChange}/>
                            </div>

                            <div className={'options__line'}></div>

                            <h3 className={'options__subtitle'}>Виберіть шрифт</h3>

                            <Select modalValue={modalValue} modalStyle={modalStyle}/>

                            <div className={'options__line'}></div>

                            <h3 className={'options__subtitle'}>Розмір шрифта</h3>

                            <ChooseFontSize/>

                            <div className={'options__line'}></div>

                            <ChooseColor/>

                            <div className={'options__line'}></div>

                            <ChooseBgColor/>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    );

}

export {Modal};