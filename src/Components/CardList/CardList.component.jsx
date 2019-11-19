import React from 'react';
import {Card} from '../Card/Card.component';
import './CardList.style.css';

export const CardList = props  => {
    let {monsters} = props;
    return(
        <div className = "card-list">
            { monsters.map(user=> (  
                <Card key = {user.id} name ={user.name} email = {user.email} id= {user.id} />
            )) 
            }
        </div>
    )
};