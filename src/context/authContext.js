import { createContext, useState } from "react";

const initialData = {
    userList: JSON.parse(localStorage.getItem('users')) || []
}

export const authContext = createContext()

const AuthContextProvider = ({ children }) => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('user')))

    const signIn = ({ username, password }) => {
        const user = users.find(el => (el.username === username) && (el.password === el.password))
        setUser(user);
        if (!user) return false
        return true
    }

    const signUp = (user) => {
        setUsers([...users, user])
        localStorage.setItem('users', JSON.stringify([...users, user]))
    }
    const logout = () => {
        if (user) {
            setUser(null)
            localStorage.removeItem('user');
        }
    }



    return <authContext.Provider value={{ users, user, signIn, signUp, logout }}>
        {children}

    </authContext.Provider>


}

export default AuthContextProvider;