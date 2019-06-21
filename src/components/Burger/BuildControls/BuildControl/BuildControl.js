import React from 'react';
import './BuildControl.css';


const buildControl = (props) =>(

    <div className="BuildControl">
        <div className="Label">{props.label}</div>
        <button className="Less" onClick={props.removed}>Retirar</button>
        <button className="More" onClick={props.added}>Adicionar</button>
    </div>
);

export default buildControl;