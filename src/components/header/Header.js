import '../../styles/header-style.css';

function Header() {

    return (
        <header className={'header'}>

            <div className={'header__wrapper wrapper'}>

                <div className={'header__items'}>
                    <h2 className={'header__logo'}>Funny Puzzle</h2>

                    <div className={'header__btn green-btn'}>
                        Go to shop
                    </div>

                </div>

                <div className={'header__line line'}> </div>

            </div>

        </header>
    );

}

export {Header};