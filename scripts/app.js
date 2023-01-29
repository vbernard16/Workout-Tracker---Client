// import api functions
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
    } from "./api.js"
    
import { store } from "./store.js"
// import ui funcitons

    import { onSignInSuccess,
            onSignUpSuccess,
            onIndexExcerciseSuccess,
            onIndexWorkoutSuccess,
            onUpdateRoutineSuccess,
            onFailure
         } from "./ui.js"
    

    const messageContainer = document.querySelector('#message-container')
    const signInContainer = document.querySelector('#sign-in-container')
    const signInForm = document.querySelector('#sign-in-form')
    const signUpContainer = document.querySelector('#sign-up-container')
    const signUpForm = document.querySelector('#sign-up-form')
    const profileContainer = document.querySelector('#profile-container')
    const workoutContainer = document.querySelector('#workout-container')
    const createWorkoutContainer = document.querySelector('#create-workout-container')
    const excerciseContainer = document.querySelector('#excercise-container')
    const signInBtn = document.querySelector('#sign-in-btn')
    const signUpBtn = document.querySelector('#sign-up-btn')
    const routineContainer = document.querySelector('.routine-container')
    
  
// handle user sign in
// signUpContainer.addEventListener('submit', (event) => {
//     console.log(event)
// })

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
        // .then(onUserSignUpSuccess)
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
        // .then(indexWorkout())
        //     .then(res => onUserSignInSuccess(res))
           
})

routineContainer.addEventListener('submit', (event) => {
    event.preventDefault()
    const id = event.target.getAttribute('id')
    const repsField = event.target.reps.value
    const setsField = event.target.sets.value
    const typeField = event.target.type.value
    const workoutId = event.target.workoutId.value
    console.log(`btn id: ${id}`)

    console.log(`workoutId: ${workoutId}`)
    const routineData = {
        reps: repsField,
        sets: setsField,
        type: typeField,
        workoutId: workoutId
    }

    console.log(routineData)

    updateRoutine(routineData, id)
        .then(onUpdateRoutineSuccess)
        .catch(onFailure)


})


workoutContainer.addEventListener('click', (event) => {
    const id = event.target.getAttribute('data-id')
   
 
})


// export const createNewWorkouts = (data) => {

// }


// export const indexWorkouts = (data) => {
//     indexWorkout()
//         .then((res => console.log(res)))

// }



// export const indexExcercises = (event) => {
//     event.preventDefault()
//     console.log(event.target)
//     // const excercise = event.target.




// USER CRUD

// signInUser(signInData)
//     .then(res => res.json())
//     .then(res => {
//         onUserSignIn(res)
//     })




// EXCERCISE CRUD

// indexExcercise()
//     .then(res => res.json())
//     .then(res => {
//         onIndexExcerciseSuccess(res.excercise)
//     })



// WORKOUT CRUD

// indexWorkout()
//     .then(res => res.json())
//     .then((res) => {
//         onIndexWorkoutSuccess(res.workout)
//     })
   

