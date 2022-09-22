import {useDispatch, useSelector} from "react-redux";

import {setValue} from "../../redux/slices/toolsSlice";
import {searchIcon} from '../../pictures/index';
import '../../styles/changeText-style.css';

function ChangeText() {

    const dispatch = useDispatch();

    const value = useSelector(state => state.toolsReducer.value);

    const handleChange = (e) => dispatch(setValue(e.target.value));


    return (
        <section className={'change-text__section'}>

            <div className={value ? 'change-text__wrapper wrapper' : 'change-text__wrapper wrapper empty-value'}>
                <img src={searchIcon} alt=""/>

                <div className={'change-text__input'}>
                    <input type="text"
                           placeholder={'Введіть текст'}
                           onChange={handleChange}
                    />

                </div>

                <div className={'change-text__btn green-btn'}>
                    Вибрати шрифт
                </div>

            </div>

        </section>
    );

}

export {ChangeText};