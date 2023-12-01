import pizza_img_1 from "../image/pizzas/pizza_img_1.png";
import pizza_img_2 from "../image/pizzas/pizza_img_2.png";
import pizza_img_3 from "../image/pizzas/pizza_img_3.png";
import pizza_img_4 from "../image/pizzas/pizza_img_4.png";
import pizza_img_5 from "../image/pizzas/pizza_img_1.png";
import pizza_img_6 from "../image/pizzas/pizza_img_2.png";
import pizza_img_7 from "../image/pizzas/pizza_img_3.png";
import pizza_img_8 from "../image/pizzas/pizza_img_4.png";


const pizzas = [
    {
        id: 1,
        img: pizza_img_1,
        title: "Пепперони с грибами",
        description: "Пикантная пепперони, моцарелла, шампиньоны, соус альфредо",
        price: "от 2000 тг"
    },
    {
        id: 2,
        img: pizza_img_2,
        title: "Ветчина и огурчики",
        description: "Соус ранч, моцарелла, ветчина  из цыпленка, маринованные огурчики, красный лук",
        price: "от 2000 тг"
    },
    {
        id: 3,
        img: pizza_img_3,
        title: "Трюфельная ",
        description: "Ветчина, трюфельный соус, моцарелла, красный лук, чеснок, шампиньоны и фирменный соус альфредо",
        price: "от 2000 тг"
    },
    {
        id: 4,
        img: pizza_img_4,
        title: "Миксик",
        description: "Пицца четвертинками с ветчиной из цыпленка, томатами, брынзой, моцареллой, фирменным соусом альфредо. Набор юного садовода в подарок",
        price: "от 2000 тг"
    },
    {
        id: 5,
        img: pizza_img_5,
        title: "Пицца Жюльен",
        description: "Цыпленок, шампиньоны, ароматный грибной соус, лук, сухой чеснок, моцарелла, смесь сыров чеддер и пармезан, фирменный соус альфредо",
        price: "от 2000 тг"
    },
    {
        id: 6,
        img: pizza_img_6,
        title: "Сырная 🌱👶 ",
        description: "Моцарелла, сыры чеддер и пармезан, соус альфредо",
        price: "от 2000 тг"
    },
    {
        id: 7,
        img: pizza_img_7,
        title: "Пепперони фреш",
        description: "Пикантная пепперони, мно-о-ого моцареллы, томаты и томатный соус",
        price: "от 2000 тг"
    },
    {
        id: 8,
        img: pizza_img_8,
        title: "Двойной цыпленок 👶 ",
        description: "Цыпленок, моцарелла, соус альфредо",
        price: "от 2000 тг"
    },
]


export default function Pizzas() {
    return (
        <div className="container" data-bs-spy="scroll" data-bs-target=".navbar" data-bs-offset="50">
            <nav className="navbar navbar-expand-sm bg-white navbar-dark sticky-top">
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#pizza">Пиццы</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#combo">Комбо</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div id="pizza" className="pizza">
                <div className="pizza__title">
                    Пиццы
                </div>
                <div className="pizza__body row">
                    {pizzas.map((item, index) =>
                        <div className="pizza__item d-flex flex-column gap-5 col-lg-3">
                            <div className="pizza__item-start">
                                <button className="pizza__img-button"><img src={item.img} alt="" className="pizza__item-img"/></button>
                                <div className="pizza__item-title">{item.title}</div>
                                <div className="pizza__item-text">{item.description}</div>
                            </div>
                            <div className="pizza__item-end align-items-center d-flex justify-content-between">
                                <div className="pizza__item-price">{item.price}</div>
                                <button className="pizza__item-button">Выбрать</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}