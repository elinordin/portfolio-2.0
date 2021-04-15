import internagoImg from '../graphics/internago.png'
import trimeImg from '../graphics/trime.png'
import githubImg from '../graphics/github.png'
import secretsImg from '../graphics/secrets.png'
import doostiImg from '../graphics/doosti.png'
import rotaImg from '../graphics/rota.png'

const projects = [
    {
        key: '1',
        title: 'Internago',
        image: internagoImg,
        alt: 'Illustration: Computer on top of a blue desk with notifications, a green small plant and a pair of glasses.',
        bullets: 'Client • Team Lead • Design • Frontend • React • Gatsby • Figma',
        readMe: 'https://github.com/internago/internago-webpage/blob/master/README.md',
        url: 'https://inspiring-heyrovsky-bd5ba4.netlify.app/'
    },
    {
        key: '2',
        title: 'Trime',
        image: trimeImg,
        alt: 'Illustration: Yellow background with wavey pattern and a black little kettlebell mascot peeking up from the bottom.',
        bullets: 'Scrum • Client • Frontend • Navigation • React Native • Figma • NPM',
        readMe: 'https://github.com/trimeTeam/Trime-App/blob/main/README.md',
    },    
    {
        key: '3',
        title: 'Github-Stats',
        image: githubImg,
        alt: 'Illustration: Black background with pink circle in the middle and turqouise text saying A+.',
        readMe: 'https://github.com/elinordin',
    },
    {
        key: '4',
        title: 'Secrets',
        image: secretsImg,
        alt: 'Illustration: Blue locked lock on a green background.',
        bullets: 'Backend • Frontend • Database • MongoDB • Node • Express',
        readMe: 'https://github.com/elinordin/secrets/blob/main/README.md',
        url: 'https://elinordin.github.io/secrets/'
    },
    {
        key: '5',
        title: 'Doosti',
        image: doostiImg,
        alt: 'Illustration: Dark blue bakground with a white outline of the shape of Afghanistan on it, in the map there are yellow pins.',
        bullets: 'Design • Frontend • NUF • Figma • CSS • Figma',
        readMe: 'https://github.com/elinordin/doosti/blob/main/README.md',
        url: 'https://elinordin.github.io/doosti/'
    },
    {
        key: '6',
        title: 'Rota',
        image: rotaImg,
        alt: 'Illustration: Three plants in three different sizes, the biggest one has four orange fruits on it.',
        bullets: 'Frontend • Mob coding • Design • Figma • Javascript • CSS',
        readMe: 'https://github.com/elinordin/Habit-tracker/blob/main/README.md',
        url: 'https://elinordin.github.io/habit-tracker/'
    }
]

export default projects;