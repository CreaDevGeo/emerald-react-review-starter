import { useState } from 'react';

function CreatureForm({ addCreature }) {
    const [newCreatureName, setNewCreatureName] = useState('');
    const [newCreatureOrigin, setNewCreatureOrigin] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Trigger POST request
        addCreature(newCreatureName, newCreatureOrigin);

        // Clear inputs
        setNewCreatureName('');
        setNewCreatureOrigin('');
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>Name:</label>
            <input
                onChange={(event) => setNewCreatureName(event.target.value)}
                value={newCreatureName}
            />
            <label>Origin:</label>
            <input
                onChange={(event) => setNewCreatureOrigin(event.target.value)}
                value={newCreatureOrigin} />
            <button type="submit">Add New Creature</button>
        </form>
    )
}

export default CreatureForm;