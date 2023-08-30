function renderUsers() {
    const container = document.getElementById('container');
    container.innerHTML = '';

    fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => {
            data.data.forEach(user => {
                const card = `
                    <div class="user-card">
                        <header class="user-header"><strong>User:</strong></header>
                        <div class="user-info">
                            <div>Name: ${user.fullName}</div>
                            <div>Email: ${user.email}</div>
                                                <div>Role: ${user.role}</div>
                                                <br> 
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', card);
            });
        })
        .catch(error => {
            console.error('Error fetching users:', error);
        });
}

export { renderUsers };
