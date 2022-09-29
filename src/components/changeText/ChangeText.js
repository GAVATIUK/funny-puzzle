import {useDispatch, useSelector} from "react-redux";

import {setValue, setIsActive} from "../../redux/slices/toolsSlice";
import {searchIcon} from '../../pictures/index';
import '../../styles/changeText-style.css';

function ChangeText() {

    const dispatch = useDispatch();

    const value = useSelector(state => state.toolsReducer.value);

    const handleChange = (e) => dispatch(setValue(e.target.value));

    const handleClick = () => {
        if (value) {
            dispatch(setIsActive(true));
        }
    }


    return (
        <section className={'change-text__section'}>

            <div className={value ? 'change-text__wrapper wrapper' : 'change-text__wrapper wrapper empty-value'}>
                <img src={searchIcon} alt=""/>

                <div className={'change-text__input'}>
                    <input type="text"
                           placeholder={'Введіть текст'}
                           onChange={handleChange}
                           value={value}
                    />

                </div>

                <div className={'change-text__btn green-btn'}
                onClick={handleClick}>
                    Choose font
                </div>

            </div>

        </section>
    );

}

export {ChangeText};