import Card from './components/Card';
import { destinations } from './data';

// Your tasks (Session 6, Part 8):
//
// TODO 1: Render the list of destinations with map and correct keys.
// TODO 2: Track a selectedId (string | null) in state.
// TODO 3: Clicking a card sets the selected id. Clicking the selected card
//         again clears it.
// TODO 4: The selected card renders with a visible selected style. The
//         .card.selected class is ready in index.css, and the .grid class
//         lays the cards out if you want it.
// TODO 5: Show a header that reads 'No destination selected' or 'You picked
//         {name}' depending on state.

function App() {
    return (
        <div>
            <h1>Selectable destinations</h1>
            {/* This one card proves the starter wiring works. Replace it
                with your own rendering of all ten destinations. */}
            <Card title={destinations[0].name}>
                <img
                    src={destinations[0].imageUrl}
                    alt={destinations[0].name}
                />
            </Card>
        </div>
    );
}

export default App;
