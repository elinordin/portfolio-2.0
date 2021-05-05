const sizes = ['0.7rem', '0.8rem', '0.9rem', '1rem']
const fills = ['#41A3EE', '#85E6D0', '#FEB943', '#FDD961']
const opacity = 'B3'

const getRandomFill = () => {return fills[Math.floor(Math.random() * fills.length)] + opacity}
const getRandomSize = () => {return sizes[Math.floor(Math.random() * sizes.length)]}
const getRandomPosition = () => {return Math.floor(Math.random() * 70) + '%'}
const getRandomSpeed = () => {return Math.floor((Math.random() * 6) + 1)}
const getDelay = () => {return Math.floor(Math.random() * 8) + 's'}



const interests = [
    {
        key: '1',
        interest: 'Dancing',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '2',
        interest: 'Bullet journaling',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '3',
        interest: 'Hiking',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '4',
        interest: 'Salsa',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '5',
        interest: 'Food',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '6',
        interest: 'Traveling',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '7',
        interest: 'Musicals',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '8',
        interest: 'Code',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '9',
        interest: 'Second hand',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '10',
        interest: 'Board games',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '11',
        interest: 'Family',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '12',
        interest: 'Mother Nature',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '13',
        interest: 'Yoga',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '14',
        interest: 'Scuba Diving',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
    {
        key: '15',
        interest: 'Adventure',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        speed: getRandomSpeed(),
        delay: getDelay(),
    },
]

export default interests