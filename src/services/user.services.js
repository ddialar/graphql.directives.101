const usersData = [
    {
        name: 'John',
        surname: 'Doe',
        role: 'guest',
        token: 'john_doe_token',
        createdAt: 1546338600,
        createdAtHuman: '2019-01-01T10:30:00+00:00',
        lastLoginAt: 1558112580,
        lastLoginAtHuman: '2019-05-17T17:03:00+00:00'
    },
    {
        name: 'Dailos',
        surname: 'Díaz',
        role: 'sysadmin',
        token: 'ddialar_token',
        createdAt: 1546338600,
        createdAtHuman: '2019-01-01T10:30:00+00:00',
        lastLoginAt: 1558112580,
        lastLoginAtHuman: '2019-05-17T17:03:00+00:00'
    }
];

const getAllUsers = () => {
    return usersData;
};

const getUserByToken = (selectedToken) => {
    return usersData.find(user => user.token === selectedToken);
};

export {
    getAllUsers,
    getUserByToken
};