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
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label}           
            added={() => props.ingredientAdded(ctrl.type)} 
            removed={() => props.ingredientRemoved(ctrl.type)}/>
        ))}      
    </div>
);

export default buildControls;
