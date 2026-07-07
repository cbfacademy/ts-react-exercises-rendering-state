import { useState } from 'react';
import Card from './components/Card';
import { destinations } from './data';

// Session 6 reference solution: list rendering with keys, a selectedId in
// state, click-to-toggle selection, and a header that follows the selection.
function App() {
    const [selectedId, setSelectedId] = useState<string | null>(null);

    function toggle(id: string) {
        setSelectedId((current) => (current === id ? null : id));
    }

    const selected = destinations.find(
        (destination) => destination.id === selectedId,
    );

    return (
        <div>
            <h1>Selectable destinations</h1>
            <p>
                {selected
                    ? `You picked ${selected.name}`
                    : 'No destination selected'}
            </p>
            <div className="grid">
                {destinations.map((destination) => (
                    <Card
                        key={destination.id}
                        title={destination.name}
                        selected={destination.id === selectedId}
                        onClick={() => toggle(destination.id)}
                    >
                        <img
                            src={destination.imageUrl}
                            alt={destination.name}
                        />
                    </Card>
                ))}
            </div>
        </div>
    );
}

export default App;
