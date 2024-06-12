type Test = {
    name: string
    lines: number
    failed: boolean
}

const test: Test = {
    failed: false,
    lines: 5,
    name: 'Test'
}

console.info(test)
