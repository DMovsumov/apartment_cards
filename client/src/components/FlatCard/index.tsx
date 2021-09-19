import React, {FC, useState} from 'react';
import './styled.index.css'
import {Flat} from "../../store/types/app";
import { ReactComponent as Heart} from "../../assets/heart.svg";

const FlatCard: FC<Flat> = ({ attributes, relationships}) => {
    const [like, setLike] = useState(false)
    const { title, rooms, address: { city, street, house }, area, unit } = attributes
    const { attributes: { first_name, last_name, middle_name }} = relationships

    return (
        <div className="Wrapper">
            <img />
            <div className="Info">
                <h2>{title}</h2>
                <span>Адрес: г. {city}, ул. {street}, д. {house}</span>
                <span>Кол-во комнат: {rooms}, {area} {unit}</span>
                <span>ФИО владельца: {last_name} {first_name} {middle_name}</span>
            </div>
            <div className="Heart" onClick={() => setLike(prevState => !prevState)}>
                {/*@ts-ignore*/}
                <Heart fill={like && 'red'}/>
            </div>
        </div>
    );
};

export default FlatCard;
