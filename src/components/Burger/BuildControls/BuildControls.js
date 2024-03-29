import React from 'react';
import './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';

const controls = [
    { label: 'Salada', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Queijo', type: 'cheese' },
    { label: 'Carne', type: 'meat'},
];

const buildControls = (props) =>(
    <div className="BuildControls">
        <p>Preço Atual: <strong>{props.price.toFixed(2)}</strong></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}           
            added={() => props.ingredientAdded(ctrl.type)} 
            removed={() => props.ingredientRemoved(ctrl.type)}
            disabled={props.disabled[ctrl.type]}/>
        ))}
        <button 
        className="OrderButton" 
        disabled={!props.purchasable}
        onClick={props.ordered}>Comprar</button>      
    </div>
);

export default buildControls;
