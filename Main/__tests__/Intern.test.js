const Intern = require('../lib/Intern')

test('Allows for school to be set and returned', () => {
    const school = 'Purdue';
    const e = new Intern('Baby boy', 1, 'Intern@test.com', school);
    expect(e.school).toBe(school);
})

test('getRole() will return "Intern"', () => {
    const role = 'Intern';
    const e = new Intern('Baby boy', 1, 'Intern@test.com', 'Purdue');
    expect(e.getRole()).toBe(role);
})

test('getSchool() will return intern school', () => {
    const school = 'Purdue';
    const e = new Intern('Baby boy', 1, 'Intern@test.com', school);
    expect(e.getSchool()).toBe(school);
})