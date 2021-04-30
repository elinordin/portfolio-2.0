import projects from './projectData'

describe('Projects', () => {

    test('exists', () => {
        expect(projects).toBeDefined()
    })

    test('contains 6 items', () => {
        expect(projects.length).toBe(6)
    })

})

projects.forEach((project, index) => {

    describe(`Project ${index + 1}`, () => {

        test('contains a key', () => {
            expect(project).toHaveProperty('key')
        })

        test('contains a title', () => {
            expect(project).toHaveProperty('title')
        })

        test('contains an image', () => {
            expect(project).toHaveProperty('image')
        })

        test('contains an alt-text', () => {
            expect(project).toHaveProperty('alt')
        })

    })
    
})
