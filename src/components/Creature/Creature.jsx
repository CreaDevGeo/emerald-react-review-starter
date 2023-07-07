import axios from 'axios';
import './Creature.css';

/* props: {
    creature: 
    fetchCreatures:
}
*/
function Creature(props) {
     /* props.creature = {
                    id: 
                    name:
                    origin:
                    favorite:    
                } */ 

    // TODO: Add a button to favorite a creature

    const favoriteCreature = () => {
        axios.put(`/creature/${props.creature.id}`)
        .then(response =>{
            props.fetchCreatures();
        }).catch(error => {
            console.log('error with favorite creature: ', error);
        })
    };
    
    return (
        <div className='creature-container'> 
            <p className='creature-name'>{props.creature.name}</p> 
            <p>{props.creature.origin}</p>
            {/* If creature has been favorited, display text instead of the button */}
            { props.creature.favorite ?
                <p>One of my faves!</p> :
                <button onClick={favoriteCreature}>❤️</button>
                }
            {props.creature.favorite && <div>🦄</div>}
        </div>
    )
}

export default Creature;
