import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

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
            <p><strong>Valor Total: </strong>{props.price.toFixed(2)}</p>
            <p>Fechar a Conta?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancelar</Button>
            <Button btnType="Success" clicked={props.purchaseContinued}>Continuar</Button>
        </Aux>
    );
};

export default orderSummary;