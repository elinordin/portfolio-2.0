const speed = [1, 2, 3, 4]
const fills = ['#41A3EE', '#85E6D0', '#FEB943', '#FDD961']
const paddings = ['3px', '4px', '5px', '6px', '7px', '8px', '9px']


const interests = [
    {
        key: '1',
        interest: 'Dancing',
        fill: fills[Math.floor(Math.random() * fills.length)],
        padding: paddings[Math.floor(Math.random() * paddings.length)],
        position: Math.floor(Math.random() * 100) + '%',
        speed: speed[Math.floor(Math.random() * speed.length)],
    },
    {
        key: '2',
        interest: 'Bullet journal',
        fill: fills[Math.floor(Math.random() * fills.length)],
        padding: paddings[Math.floor(Math.random() * paddings.length)],
        position: Math.floor(Math.random() * 100) + '%',
        speed: speed[Math.floor(Math.random() * speed.length)],
    },
    {
        key: '3',
        interest: 'Hiking',
        fill: fills[Math.floor(Math.random() * fills.length)],
        padding: paddings[Math.floor(Math.random() * paddings.length)],
        position: Math.floor(Math.random() * 100) + '%',
        speed: speed[Math.floor(Math.random() * speed.length)],
    },
    {
        key: '4',
        interest: 'Salsa',
        fill: fills[Math.floor(Math.random() * fills.length)],
        padding: paddings[Math.floor(Math.random() * paddings.length)],
        position: Math.floor(Math.random() * 100) + '%',
        speed: speed[Math.floor(Math.random() * speed.length)],
    },
    {
        key: '5',
        interest: 'Food',
        fill: fills[Math.floor(Math.random() * fills.length)],
        padding: paddings[Math.floor(Math.random() * paddings.length)],
        position: Math.floor(Math.random() * 100) + '%',
        speed: speed[Math.floor(Math.random() * speed.length)],
    },
]

export default interests