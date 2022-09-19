import '../../styles/changeText-style.css';
import pic from '../../pictures/Vector.png';

function ChangeText({setValue, value}) {

    return (
        <section className={'change-text__section'}>
            <div className={value ? 'change-text__wrapper wrapper' : 'change-text__wrapper wrapper empty-value'}>
                <img src={pic} alt=""/>
                <div className={'change-text__input'}>
                    <input type="text"
                           placeholder={'Введіть текст'}
                           onChange={(e) => setValue(e.target.value)}
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