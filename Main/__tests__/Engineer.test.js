const Engineer = require('../lib/Engineer');

test('Allows for github to be set and returned', () => {
    const github = 'Kirchnerdev22';
    const e = new Engineer('Trent', 1, 'me@test.com', github);
    expect(e.github).toBe(github);
})

test('getRole() will return "Engineer"', () => {
    const role = 'Engineer';
    const e = new Engineer('Trent', 1, 'me@test.com', 'Kirchnerdev22');
    expect(e.getRole()).toBe(role);
})

test('getGithub() will return github username', () => {
    const github = 'Kirchnerdev22';
    const e = new Engineer('Trent', 1, 'me@test.com', github);
    expect(e.getGithub()).toBe(github);
})