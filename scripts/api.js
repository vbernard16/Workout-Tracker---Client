
import { store } from "./store.js"

export const indexWorkout = () => {
     return fetch(`http://localhost:3000/workouts`, {
        headers: {
            'Authorization': `Bearer ${store.userToken}`
        }
     })
}

export const findWorkout = (id) => {
    return fetch(`http://localhost:3000/workouts/${id}`)
}

export const createWorkout = (data) => {
    return fetch(`http://localhost:3000/workouts`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const updateWorkout = (data, id) => {
    return fetch(`http://localhost:3000/workouts/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const deleteWorkout = (id) => {
    return fetch(`http://localhost:3000/workouts/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${store.userToken}`
        }

    })
    
}

// User api's

export const signUpUser = (data) => {
    return fetch(`http://localhost:3000/sign-up`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const signInUser = (data) => {
    return fetch(`http://localhost:3000/sign-in`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

// excercise api's

export const indexExcercise = () => {
    return fetch(`http://localhost:3000/excercises`)
}

export const findExcercise = () => {
    return fetch(`http://localhost:3000/excercises`)
}

export const createExcercise = (data) => {
    return fetch(`http://localhost:3000/excercises`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const addRoutine = (data) => {
    return fetch(`http://localhost:3000/routines`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const updateRoutine = (data, id) => {
    return fetch(`http://localhost:3000/routines/${id}`, {
        method: 'PATCH',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.userToken}`
        },
        body: JSON.stringify(data)
    })
}

export const deleteRoutine = (id) => {
    return fetch(`http://localhost:3000/routines/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${store.userToken}`
        }

    })
    
}