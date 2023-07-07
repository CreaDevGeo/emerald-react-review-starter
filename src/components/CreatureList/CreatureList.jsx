import Creature from '../Creature/Creature';

function CreatureList({ creatureList }) {
    return (
        // {creatureList.map...} needs to be in JSX to work, so we need a fragment or div wrapper here
        <>
            {creatureList.map(creature => {
                return (<Creature creature={creature}/>)
            })}
        </>
    )
}

export default CreatureList;