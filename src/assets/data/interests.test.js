import interests from './interests'

test('Interests array exists', () => {
    expect(interests).toBeDefined()
})


interests.forEach((interest) => {

    test(`${interest.interest} contains all keys`, () => {
        expect(interest).toHaveProperty(
            'key',
            'interest',
            'fill',
            'size',
            'position',
            'svgSpeed',
            'moveSpeed',
            'delay')
    })

})