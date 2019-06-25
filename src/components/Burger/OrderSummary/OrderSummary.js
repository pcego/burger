import React from 'react';
import Aux from '../../../hoc/Aux';

const orderSummary = (props) =>{
    
    const ingredientSummary = Object.keys(props.ingredients).map(igKey =>{
        return <li key={igKey}><span style={{textTransform: 'capitalize'}}>{igKey}</span>: {props.ingredients[igKey]}</li>
    });

    return (
        <Aux>
            <h3>Seu Pedido</h3>
            <p>Um Delicioso Humberguer Com os Seguintes Ingredientes: </p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Fechar a Conta?</p>
        </Aux>
    );
};

export default orderSummary;