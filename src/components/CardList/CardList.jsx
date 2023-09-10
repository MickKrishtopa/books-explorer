import "./CardList.css";

import CardItem from "../CardItem/CardItem";

export default function CardList() {
    const data = [1, 2, 3, 4];
    return (
        <section className='card-list'>
            <h2 className='card-list__counter'>{`Found ${data.length} books`}</h2>
            <ul className='card-list__list'>
                <CardItem
                    title={"Book"}
                    img={
                        "https://blog.mann-ivanov-ferber.ru/wp-content/uploads/2015/10/Kniga-sudeb.jpg"
                    }
                    category={"Porno"}
                    author={"Jim Dick"}
                />
                <CardItem
                    title={"Book"}
                    img={
                        "https://blog.mann-ivanov-ferber.ru/wp-content/uploads/2015/10/Kniga-sudeb.jpg"
                    }
                    category={"Porno"}
                    author={"Jim Dick"}
                />
            </ul>
            <button className='card-list__more-btn'>Show more</button>
        </section>
    );
}
