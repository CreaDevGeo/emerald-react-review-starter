import Creature from '../Creature/Creature';

function CreatureList({ creatureList, fetchCreatures }) {
    return (
        // This is where we'll display a Creature component for every creature in the list
        <>
         {/* creature can be butts - it just represents each item  */}
         {/* in our creatureList, but we can call it whatever we want */}
            {creatureList.map((creature) => {

                /* creature = {
                    id: 
                    name:
                    origin:
                    favorite:    
                } */ 
                return (<Creature creature={creature} fetchCreatures={fetchCreatures}/>) // Creature({ creature: creature })
            })}
        </>

    )
}

export default CreatureList;