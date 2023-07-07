import axios from 'axios';
import './Creature.css';

function Creature({ creature }) {

    // TODO: Add a button to favorite a creature
    
    return (
        <div className='creature-container'> 
            <p className='creature-name'>{creature.name}</p> 
            <p>{creature.origin}</p>
        </div>
    )
}

export default Creature;
