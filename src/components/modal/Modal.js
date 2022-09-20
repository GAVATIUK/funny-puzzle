import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setIsActive} from "../../redux/slices/toolsSlice";
import {ChooseColor} from "../chooseColor/ChooseColor";
import {bed, woman, bedIcon, womanIcon} from '../../pictures/index';
import '../../styles/modal-style.css';

function Modal() {

    const [value, setValue] = useState('');
    const [icon, setIcon] = useState(true);

    const dispatch = useDispatch();

    const isActive = useSelector(state => state.toolsReducer.isActive);
    const modalValue = useSelector(state => state.toolsReducer.modalValue);
    const modalStyle = useSelector(state => state.toolsReducer.modalStyle);
    const fontColor = useSelector(state => state.toolsReducer.fontColor);

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
             onClick={() => dispatch(setIsActive(false))}
        >

            <div className={isActive ? 'modal__wrapper wrapper active' : 'modal__wrapper wrapper'}
                 onClick={e => e.stopPropagation()}>

                <div className={'modal__container'}>
                    <div className={'modal__header'}>
                        <h1 className={'modal__header-title'}>Налаштуйте свій стиль</h1>
                        <div className={'modal__header-btn'}
                             onClick={() => dispatch(setIsActive(false))}>

                        </div>

                    </div>

                    <div className={'modal__line'}></div>

                    <div className={'modal__content-container'}>

                        {/*left side*/}

                        <div className={'modal__actions'}>

                            {
                                icon ?
                                    <div className={'modal__actions-bed modal__actions-general'}>
                                        <div className={'actions-bed__title actions__title'}>
                                            <h2 className={modalStyle}
                                                style={{color: `${fontColor}`}}
                                            >
                                                {value ? value : modalValue}
                                            </h2>
                                        </div>
                                        <div className={'actions-bed'}>
                                            <img src={bed} alt="bed"/>
                                        </div>
                                    </div>
                                    :
                                    <div className={'modal__actions-woman modal__actions-general'}>
                                        <div className={'actions-woman__title actions__title'}>
                                            <h2 className={modalStyle}
                                                style={{color: `${fontColor}`}}
                                            >
                                                {value ? value : modalValue}
                                            </h2>
                                        </div>
                                        <div className={'actions-woman'}>
                                            <img src={woman} alt="woman"/>

                                        </div>
                                    </div>
                            }


                            <div className={'modal__actions-icons'}>
                                <div className={icon ? 'icon green-border' : 'icon grey-border'}
                                     onClick={() => setIcon(true)}
                                >
                                    <img src={bedIcon} alt="bed icon"/>
                                </div>

                                <div className={icon ? 'icon grey-border' : 'icon green-border'}
                                     onClick={() => setIcon(false)}
                                >
                                    <img src={womanIcon} alt="woman icon"/>
                                </div>
                            </div>


                        </div>
                        {/*right side*/}
                        <div className={'modal__options'}>
                            <h3 className={'options__subtitle'}>Надпис</h3>

                            <div className={'options__input'}>
                                <input type="text"
                                       placeholder={'Введіть підпис'}
                                       onChange={(e) => setValue(e.target.value)}
                                />
                            </div>

                            <div className={'options__line'}></div>

                            <h3 className={'options__subtitle'}>Виберіть шрифт</h3>

                            <div> select</div>

                            <div className={'options__line'}></div>

                            <ChooseColor/>

                            <div className={'options__line'}></div>

                            <h4>Виберіть колір підкладки</h4>

                            <div></div>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    );

}

export {Modal};