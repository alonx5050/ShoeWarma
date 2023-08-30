
async function getAllUsers() {
    return new Promise((resolve, reject) => {
        const url = 'http://localhost:3000/users';

        $.ajax({
            type: 'GET',
            url,
            contentType: 'application/json',
            success: function (data) {
                const users = data.users;
                resolve(users);
            },
            error: function (error) {
                reject(error);
            },
        });
    });
}

export { getAllUsers };





