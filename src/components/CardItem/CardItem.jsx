import "./CardItem.css";

export default function CardItem({ title, img, category, author }) {
    return (
        <li className='card-item'>
            <img className='card-item__img' src={img} alt={title} />

            <p className='card-item__category'>{category}</p>
            <h2 className='card-item__title'>{title}</h2>
            <p className='card-item__author'>{author}</p>
        </li>
    );
}
