
import { indexWorkout,
        signInUser,
        signUpUser,
        createWorkout,
        addRoutine,
    } 
from "./api.js" 

import { onSignInSuccess,
        onSignUpSuccess,
        onIndexWorkoutSuccess,
        onAddRoutineSuccess,
        onCreateNewWorkoutSuccess,
         } 
from "./ui.js"
    

    const signInContainer = document.querySelector('#sign-in-container')
    const signUpContainer = document.querySelector('#sign-up-container')
    const workoutContainer = document.querySelector('#workout-container')
    const createWorkoutForm = document.querySelector('#create-workout-form')

  

signUpContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const formFieldUsername = event.target.username.value
    const formFieldPassword = event.target.password.value
    const formattedData = {credentials: {
        username: formFieldUsername,
        password: formFieldPassword,
    }}
    signUpUser(formattedData)
        .then(res => res.json())
        .then(onSignUpSuccess) 
})


signInContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const formFieldUsername = event.target.username.value
    const formFieldPassword = event.target.password.value
    const formattedData = {credentials: {
        username: formFieldUsername,
        password: formFieldPassword
    }}
    signInUser(formattedData)
    .then((res) => res.json())
        .then((res) => onSignInSuccess(res.token))
        .then(indexWorkout)
            .then((res) => res.json())
            .then((res) => onIndexWorkoutSuccess(res.workout))
})



workoutContainer.addEventListener('submit', (event) => {
    event.preventDefault()

    const workoutId = event.target.getAttribute('workoutId')

    if (!workoutId) return

    const excerciseName = event.target.name.value
    const excerciseReps = event.target.reps.value
    const excerciseSets = event.target.sets.value

    const excerciseInputData = {routine: {
        name: excerciseName,
        reps: excerciseReps,
        sets: excerciseSets,
        workoutId: workoutId,
    }
}

 addRoutine(excerciseInputData)
    .then(onAddRoutineSuccess)
})

createWorkoutForm.addEventListener('submit', (event) => {
    event.preventDefault()

    const workoutName = event.target.workoutName.value

    const workoutInputData = {workout: {
        name: workoutName,
    }
}
    createWorkout(workoutInputData)
        .then((res) => res.json())
        .then((res) => {
            onCreateNewWorkoutSuccess(res.workout)
        })
})





