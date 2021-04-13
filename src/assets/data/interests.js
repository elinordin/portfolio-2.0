import blob1 from '../graphics/blob-1.svg'
import blob2 from '../graphics/blob-2.svg'
import blob3 from '../graphics/blob-3.svg'
import blob4 from '../graphics/blob-4.svg'
import blob5 from '../graphics/blob-5.svg'

const shapes = [blob1, blob2, blob3, blob4, blob5]
const speed = [1, 2, 3, 4]
const fills = ['#41A3EE', '#85E6D0', '#FEB943', '#FDD961']
const positions = ['10px', '25px', '35px', '50px', '60px', '75px', '80px', '95px', '105px']


const interests = [
    {
        key: '1',
        interest: 'Dancing',
        fill: fills[Math.floor(Math.random() * fills.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        position: positions[Math.floor(Math.random() * positions.length)],
        speed: speed[Math.floor(Math.random() * speed.length)],
    },
    {
        key: '2',
        interest: 'Bullet journal',
        fill: fills[Math.floor(Math.random() * fills.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        position: positions[Math.floor(Math.random() * positions.length)],
        speed: speed[Math.floor(Math.random() * speed.length)],
    },
    {
        key: '3',
        interest: 'Hiking',
        fill: fills[Math.floor(Math.random() * fills.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        position: positions[Math.floor(Math.random() * positions.length)],
        speed: speed[Math.floor(Math.random() * speed.length)],
    },
    {
        key: '4',
        interest: 'Salsa',
        fill: fills[Math.floor(Math.random() * fills.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        position: positions[Math.floor(Math.random() * positions.length)],
        speed: speed[Math.floor(Math.random() * speed.length)],
    },
    {
        key: '5',
        interest: 'Food',
        fill: fills[Math.floor(Math.random() * fills.length)],
        shape: shapes[Math.floor(Math.random() * shapes.length)],
        position: positions[Math.floor(Math.random() * positions.length)],
        speed: speed[Math.floor(Math.random() * speed.length)],
    },
]

export default interests