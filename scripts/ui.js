const profileContainer = document.querySelector('#profile-container')
const signUpContainer = document.querySelector('#sign-up-container')
const signInContainer = document.querySelector('#sign-in-container')
const excerciseContainer = document.querySelector('#excercise-container')
const workoutContainer = document.querySelector('#workout-container')
const messageContainer = document.querySelector('#message-container')
const excerciseBtns = document.querySelectorAll('.excercise-btn')
const signInForm = document.querySelector('#sign-in-form')
const routineContainer = document.querySelector('.routine-container')
const createWorkoutForm = document.querySelector('#create-workout-form')
const profileHeader = document.querySelector('#profile-header')
import { store } from "./store.js"

import { updateRoutine, deleteRoutine } from "./api.js"

import { indexWorkout } from "./api.js"

export const onExcerciseButtonClick = () => {
    
}


export const onIndexExcerciseSuccess = (excercise) => {
    excercise.forEach((excercise) => {
        // console.log(excercise.name)
        const excerciseDiv = document.createElement('div')
        excerciseDiv.innerHTML = `
        <h3>Excercise: ${excercise.name} </h3>`
        excerciseContainer.append(excerciseDiv)
    })
}


export const onUpdateRoutineSuccess = () => {
    messageContainer.innerHTML = 'Successfully updated routine'
}


export const onFailure = (error) => {
    messageContainer.innerHTML = `
        <h3>You have an error</h3>
        <p>${error}</p>`
}

export const onSignInSuccess = (userToken) => {
    signInForm.classList.add('hidden')
    signUpContainer.classList.add('hidden')
    profileHeader.innerHTML= `<h1>Welcome</h1>`
    store.userToken = userToken
}


export const onSignUpSuccess = () => {
    messageContainer.innerHTML = `Created new user`
    signUpContainer.classList.add('hidden')
    signInForm.classList.add('hidden')
    profileContainer.innerHTML = `<h1>Welcome</h1>`
} 

export const onCreateNewWorkout =(workout) => {
    const workoutDiv = document.createElement('div')
    workoutDiv.classList.add('workoutDiv')
    profileContainer.innerHTML = `
    <h2>Add a new workout</h2>
    <div class="new-workout-container>
        <form>
            <input type="text" name="workout name" value="username">
            <input type="text" name="day" value="password">
            <input type="text" name="routines" value="username">
            <input id="sign-up-btn" type="submit" value="sign up"/>
        </form>
    </div>
    `
  
}    


export const onIndexWorkoutSuccess = (workout) => {
    workout.forEach((workout) => {
        const workoutDiv = document.createElement('div')
        const excercise = workout.routines
        workoutDiv.innerHTML = `
        <h2>${workout.name} (${workout.day})</h2>
        <h2>Add an excercise</h2>
        <form workoutId="${workout._id}" id="${workout._id}-form">
                <input class="hidden" type="text" value=${workout._id} name="workoutId">
                <input  type="text" name="name" value="excercise name">
                <input  type="text" name="reps" value="reps">
                <input  type="text" name="sets" value="sets">
                <input id="${excercise._id}-btn" name="${excercise.name}-form-submit"  type="submit" value="Add new excercise"/>
        </form>
        
        <input type="submit" class="delete-workout-btn" name="workout-delete" value="Remove Workout">
        <input type="submit" class="edit-workout-btn" name="workout-edit" value="Edit Workout">
        `
        workoutContainer.append(workoutDiv)
        const routines = workout.routines
         routines.forEach((routine) => {
            const routineDiv = document.createElement('div')
            
            routineDiv.innerHTML = `
            <h2>${routine.name}</h2>
            
            <form id="test" data-id="${routine._id}">
                <input class="hidden" type="text" value=${workout._id} name="workoutId">
                <input  type="text" name="reps" value="${routine.reps}">
                <input  type="text" name="sets" value="${routine.sets}">
                <button id="${routine._id}-edit-btn"  type="submit">edit routine</button>
                
            </form>
                <button data-id="${routine._id}" type="button" class="btn">delete</button>
            `
            routineDiv.addEventListener('click', (event) => {
                event.preventDefault()
                const id = event.target.getAttribute('data-id')

                if (!id) return

                deleteRoutine(id)

            })

            routineDiv.addEventListener('submit', (event) => {  
                event.preventDefault()
                const id = event.target.getAttribute('data-id')
            
                if (!id) return
            
                const repsField = event.target.reps.value
                const setsField = event.target.sets.value
                const workoutIdField = event.target.workoutId.value
            
                const routineData = {routine: {
                    reps: repsField,
                    sets: setsField,
                    workoutId: workoutIdField,
                }
            }
            
                updateRoutine(routineData, id)
                    .then(onUpdateRoutineSuccess)
                    .catch(onFailure)
            
            
            })
            routineContainer.append(routineDiv)
        
        })
    })
}


export const onAddRoutineSuccess = () => {
    messageContainer.innerHTML = `Added new excercise`
}

// onUserCreateExcercise

// onIndexExcerciseSuccess