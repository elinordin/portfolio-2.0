const sizes = ['0.7rem', '0.8rem', '0.9rem', '1rem', '1.1rem']
const fills = ['#41A3EE', '#85E6D0', '#FEB943', '#FDD961']

const getRandomFill = () => {return fills[Math.floor(Math.random() * fills.length)]}
const getRandomSize = () => {return sizes[Math.floor(Math.random() * sizes.length)]}
const getRandomPosition = () => {return Math.floor(Math.random() * 80) + '%'}
const getRandomSvgSpeed = () => {return Math.floor((Math.random() * 6) + 1) + 's'}
const getRandomMoveSpeed = () => {return Math.floor((Math.random() * 25) + 18) + 's'}



const interests = [
    {
        key: '1',
        interest: 'Dancing',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        svgSpeed: getRandomSvgSpeed(),
        moveSpeed: getRandomMoveSpeed(),
    },
    {
        key: '2',
        interest: 'Bullet journaling',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        svgSpeed: getRandomSvgSpeed(),
        moveSpeed: getRandomMoveSpeed(),
    },
    {
        key: '3',
        interest: 'Hiking',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        svgSpeed: getRandomSvgSpeed(),
        moveSpeed: getRandomMoveSpeed(),
    },
    {
        key: '4',
        interest: 'Salsa',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        svgSpeed: getRandomSvgSpeed(),
        moveSpeed: getRandomMoveSpeed(),
    },
    {
        key: '5',
        interest: 'Food',
        fill: getRandomFill(),
        size: getRandomSize(),
        position: getRandomPosition(),
        svgSpeed: getRandomSvgSpeed(),
        moveSpeed: getRandomMoveSpeed(),
    },
]

export default interests