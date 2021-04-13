const speed = ['2s', '3s', '4s', '5s']
const fills = ['#41A3EE', '#85E6D0', '#FEB943', '#FDD961']

const getRandomFill = () => {return fills[Math.floor(Math.random() * fills.length)]}
const getRandomPosition = () => {return Math.floor(Math.random() * 80) + '%'}
const getRandomSpeed = () => {return speed[Math.floor(Math.random() * speed.length)]}



const interests = [
    {
        key: '1',
        interest: 'Dancing',
        fill: getRandomFill(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
    },
    {
        key: '2',
        interest: 'Bullet journal',
        fill: getRandomFill(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
    },
    {
        key: '3',
        interest: 'Hiking',
        fill: getRandomFill(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
    },
    {
        key: '4',
        interest: 'Salsa',
        fill: getRandomFill(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
    },
    {
        key: '5',
        interest: 'Food',
        fill: getRandomFill(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
    },
]

export default interests