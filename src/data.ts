// The ten destinations used across Sessions 6 to 8. The phase field arrives
// in Session 7, along with the API.

export interface Destination {
    id: string;
    name: string;
    imageUrl: string;
}

export const destinations: Destination[] = [
    { id: 'd01', name: 'Kyoto, Japan', imageUrl: '/destinations/kyoto.svg' },
    {
        id: 'd02',
        name: 'Reykjavik, Iceland',
        imageUrl: '/destinations/reykjavik.svg',
    },
    {
        id: 'd03',
        name: 'Marrakesh, Morocco',
        imageUrl: '/destinations/marrakesh.svg',
    },
    {
        id: 'd04',
        name: 'Queenstown, New Zealand',
        imageUrl: '/destinations/queenstown.svg',
    },
    {
        id: 'd05',
        name: 'Lisbon, Portugal',
        imageUrl: '/destinations/lisbon.svg',
    },
    { id: 'd06', name: 'Banff, Canada', imageUrl: '/destinations/banff.svg' },
    { id: 'd07', name: 'Hanoi, Vietnam', imageUrl: '/destinations/hanoi.svg' },
    { id: 'd08', name: 'Cusco, Peru', imageUrl: '/destinations/cusco.svg' },
    {
        id: 'd09',
        name: 'Cape Town, South Africa',
        imageUrl: '/destinations/capetown.svg',
    },
    { id: 'd10', name: 'Tromso, Norway', imageUrl: '/destinations/tromso.svg' },
];
