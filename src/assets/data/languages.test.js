import { convertToPercent, checkForOther } from './languages'

describe('convertToPercent', () => {

    test('4 languages with 500 * 4 bytes to equal 25% * 4', () => {
        const languagesInBytes = [
            { label: 'JavaScript', value: 500 },
            { label: 'HTML', value: 500 },
            { label: 'CSS', value: 500 },
            { label: 'PHP', value: 500 }
        ]
        const languagesInPercent = [
            { label: 'JavaScript', value: 25 },
            { label: 'HTML', value: 25 },
            { label: 'CSS', value: 25 },
            { label: 'PHP', value: 25 }
        ]
        expect(convertToPercent(languagesInBytes)).toEqual(languagesInPercent)
    })

    test('2 languages with 150 + 50 bytes to equal 75% + 25%', () => {
        const languagesInBytes = [
            { label: 'JavaScript', value: 150 },
            { label: 'HTML', value: 50 }
        ]
        const languagesInPercent = [
            { label: 'JavaScript', value: 75 },
            { label: 'HTML', value: 25 }
        ]
        expect(convertToPercent(languagesInBytes)).toEqual(languagesInPercent)
    })

    test('1 language to equal 100%', () => {
        const languagesInBytes = [{ label: 'JavaScript', value: 3000 }]
        const languagesInPercent = [{ label: 'JavaScript', value: 100 }]

        expect(convertToPercent(languagesInBytes)).toEqual(languagesInPercent)
    })

})


describe('checkForOther', () => {

    test('returns same array if no value under 1% is passed in', () => {
        const languages = [
            { label: 'JavaScript', value: 50 },
            { label: 'HTML', value: 50 }
        ]
        expect(checkForOther(languages)).toEqual(languages)
    })

    test('returns array with other category if one value under 1% is passed in', () => {
        const languages = [
            { label: 'JavaScript', value: 50.5 },
            { label: 'HTML', value: 49 },
            { label: 'EJS', value: 0.5 },
        ]
        const languagesWithOther = [
            { label: 'JavaScript', value: 50.5 },
            { label: 'HTML', value: 49 },
            { id: 'Other', label: 'Other', value: 0.5, color: '#CCCCCC' }
        ]
        expect(checkForOther(languages)).toEqual(languagesWithOther)
    })

    test('returns array with other category if two values under 1% is passed in', () => {
        const languages = [
            { label: 'JavaScript', value: 99 },
            { label: 'HTML', value: 0.5 },
            { label: 'EJS', value: 0.5 },
        ]
        const languagesWithOther = [
            { label: 'JavaScript', value: 99 },
            { id: 'Other', label: 'Other', value: 1, color: '#CCCCCC' }
        ]
        expect(checkForOther(languages)).toEqual(languagesWithOther)
    })

})
