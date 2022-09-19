import '../../styles/cards-style.css';

function Card({style, value}) {

    return (
        <div className={'card'}>
            <div className={'card__title'}>
                <h2 className={style}>{value}</h2>
            </div>
            <div className={'card__line line'}> </div>
            <div className="btn__container">
                <div className={'btn__title'}>Кастомізувати</div>
                <div className={'btn'}>
                <div className={'plus-icon'}>
                    <div className={'stick1'}> </div>
                    <div className={'stick2'}> </div>
                </div>
                </div>
            </div>
        </div>
    );

}

export {Card};