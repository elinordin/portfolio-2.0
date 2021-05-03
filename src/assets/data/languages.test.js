import {convertToPercent, checkForOther, getLanguages} from './languages'

describe('convertToPercent', () => {

    test('4 languages with 500*4 bytes to 25(%)', () => {
        const languagesInBytes = [
            {label: 'JavaScript', value: 500},
            {label: 'HTML', value: 500},
            {label: 'CSS', value: 500},
            {label: 'PHP', value: 500},
        ]
        const languagesInPercent = [
            {label: 'JavaScript', value: 25},
            {label: 'HTML', value: 25},
            {label: 'CSS', value: 25},
            {label: 'PHP', value: 25},
        ]
        expect(convertToPercent(languagesInBytes)).toEqual(languagesInPercent)
    })

    test('2 languages with 150 + 50 bytes to 75(%) and 25(%)', () => {
        const languagesInBytes = [
            {label: 'JavaScript', value: 150},
            {label: 'HTML', value: 50},
        ]
        const languagesInPercent = [
            {label: 'JavaScript', value: 75},
            {label: 'HTML', value: 25},
        ]
        expect(convertToPercent(languagesInBytes)).toEqual(languagesInPercent)
    })
    
})

describe('getLanguages', () => {
    test('exists', () => {
        expect(getLanguages()).toBeDefined()
    })
})