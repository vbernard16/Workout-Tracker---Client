
import { indexWorkout,
        signInUser,
        signUpUser,
        findWorkout,
        createWorkout,
        updateWorkout,
        deleteWorkout,
        indexExcercise,
        findExcercise,
        createExcercise,
        updateRoutine,
        addRoutine,
        deleteRoutine
    } 
from "./api.js" 

import { onSignInSuccess,
        onSignUpSuccess,
        onIndexExcerciseSuccess,
        onIndexWorkoutSuccess,
        onUpdateRoutineSuccess,
        onAddRoutineSuccess,
        onFailure,
        onCreateNewWorkout,
        onCreateNewWorkoutSuccess,
        onDeleteWorkoutSuccess
         } 
from "./ui.js"
    

    const messageContainer = document.querySelector('#message-container')
    const signInContainer = document.querySelector('#sign-in-container')
    const signInForm = document.querySelector('#sign-in-form')
    const signUpContainer = document.querySelector('#sign-up-container')
    const signUpForm = document.querySelector('#sign-up-form')
    const profileContainer = document.querySelector('#profile-container')
    const workoutContainer = document.querySelector('#workout-container')
    const createWorkoutContainer = document.querySelector('#create-workout-container')
    const excerciseContainer = document.querySelector('#excercise-container')
    const createWorkoutForm = document.querySelector('#create-workout-form')
    const signInBtn = document.querySelector('#sign-in-btn')
    const signUpBtn = document.querySelector('#sign-up-btn')

  

signUpContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const formFieldUsername = event.target.username.value
    const formFieldPassword = event.target.password.value
    const formFieldPasswordConfirmation = event.target.passwordConfirmation.value
    const formattedData = {credentials: {
        username: formFieldUsername,
        password: formFieldPassword,
        passwordConfirmation: formFieldPasswordConfirmation
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





