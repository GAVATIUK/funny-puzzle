import {useDispatch} from "react-redux";
import {useState} from "react";

import {setModalStyle, setModalValue} from "../../redux/slices/toolsSlice";
import {fonts} from "../../services/fonts-service";
import '../../styles/select-style.css';


function Select({modalValue, modalStyle}) {

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const handleClick = (font) => {
        dispatch(setModalValue(font.name));
        dispatch(setModalStyle(font.font));
        setOpen(false);
    }

    return (

        <div className={open ? 'select__wrapper opened' : 'select__wrapper'}>

            <div className={'select'} onClick={() => setOpen(!open)}>
                <h2 className={modalStyle}>{modalValue}</h2>
                <div className={open ? 'select__btn selected' : 'select__btn'}>
                    &#10095;
                </div>

            </div>

            <div className={'select__line'}></div>

            <div className={'options__wrapper'}>
                {
                    fonts.map(font =>

                        <div className={'option'}
                             key={font.id}
                             onClick={() => handleClick(font)}>
                            <h3 className={font.font}>{font.name}</h3>
                        </div>)
                }

            </div>

        </div>
    );

}

export {Select};