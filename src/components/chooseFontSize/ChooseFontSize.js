import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";

import {setFontSize} from "../../redux/slices/toolsSlice";


function ChooseFontSize() {

    const [open, setOpen] = useState(false);

    const dispatch = useDispatch();

    const fontSize = useSelector(state => state.toolsReducer.fontSize);

    const sizes = [];
    for (let i = 8; i <= 100; i++) {
        sizes.push(i);
    }

    const handleOnchange = (e) => {
        if (e.target.value >= 0 && e.target.value <= 100) {
            dispatch(setFontSize(e.target.value));
        }
    };

    return (

        <div className={'chooseFontSize__wrapper'}>
            <div className={open ? 'select__wrapper opened' : 'select__wrapper'}>

                <div className={'select'} onClick={() => setOpen(!open)}>

                    <input type='number'
                           value={fontSize}
                           onChange={handleOnchange}
                           onClick={e => e.stopPropagation()}
                    />

                    <div className={open ? 'select__btn selected' : 'select__btn'}>
                        &#10095;
                    </div>

                </div>

                <div className={'options__wrapper'}>

                    <div className={'select__line'}></div>

                    {
                        sizes.map((size, index) =>
                            <div className={'option'}
                                 key={index}
                                 onClick={() => dispatch(setFontSize(size))}>

                                {size}

                            </div>)
                    }

                </div>

            </div>

        </div>

    );


}

export {ChooseFontSize};