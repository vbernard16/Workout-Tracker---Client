
import { store } from "./store.js"

export const indexWorkout = () => {
     return fetch(`https://agile-falls-34596.herokuapp.com/workouts`, {
        headers: {
            'Authorization': `Bearer ${store.userToken}`
        }
     })
}

export const findWorkout = (id) => {
    return fetch(`https://agile-falls-34596.herokuapp.com/workouts/${id}`)
}

export const createWorkout = (data) => {
    return fetch(`https://agile-falls-34596.herokuapp.com/workouts`, {
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
    return fetch(`https://agile-falls-34596.herokuapp.com/workouts/${id}`, {
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
    return fetch(`https://agile-falls-34596.herokuapp.com/workouts/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${store.userToken}`
        }

    })
    
}


export const signUpUser = (data) => {
    return fetch(`https://agile-falls-34596.herokuapp.com/sign-up`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

export const signInUser = (data) => {
    return fetch(`https://agile-falls-34596.herokuapp.com/sign-in`, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}


export const indexExcercise = () => {
    return fetch(`https://agile-falls-34596.herokuapp.com/excercises`)
}

export const findExcercise = () => {
    return fetch(`https://agile-falls-34596.herokuapp.com/excercises`)
}

export const createExcercise = (data) => {
    return fetch(`https://agile-falls-34596.herokuapp.com/excercises`, {
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
    return fetch(`https://agile-falls-34596.herokuapp.com/routines`, {
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
    return fetch(`https://agile-falls-34596.herokuapp.com/routines/${id}`, {
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
    return fetch(`https://agile-falls-34596.herokuapp.com/routines/${id}`, {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${store.userToken}`
        }
    })
    
}