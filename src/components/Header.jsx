import logo from '../image/logo/img.png'

export default function Header() {
    return (
        <div className="container d-flex justify-content-between align-items-center pt-5 pb-5">
            <div className="header__left align-items-center d-flex gap-4">
                <div className="header__logo">
                    <img width="38" src={logo}  alt="logo pizza"/>
                </div>
                <div className="header__title">
                    <div className="header__title-text">
                        REACT PIZZA
                    </div>
                    <div className="header__text">
                        самая вкусная пицца во вселенной
                    </div>
                </div>
            </div>
            <div className="header__right">
                <button className="header__cart-button">
                    Корзина
                </button>
            </div>
        </div>
    );
}