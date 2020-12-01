import useFetch from './UseFetch'

function Menu() {

    const users = useFetch('https://jsonplaceholder.typicode.com/users')

    if (!users) return 'Loading ...'

    return (
        <aside className="menu">
            <h2>Menu</h2>
            <ul>
                {users.map(user =>
                    <li key={user.id}>{user.name}</li>
                )}
            </ul>
        </aside>
    )
}

export default Menu
