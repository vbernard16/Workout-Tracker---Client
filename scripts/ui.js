import { store } from "./store.js"
import { updateRoutine, deleteWorkout, updateWorkout } from "./api.js"


const profileContainer = document.querySelector('#profile-container')
const header = document.querySelector('#header')
const signUpContainer = document.querySelector('#sign-up-container')
const excerciseContainer = document.querySelector('#excercise-container')
const workoutContainer = document.querySelector('#workout-container')
const messageContainer = document.querySelector('#message-container')
const signInForm = document.querySelector('#sign-in-form')
const routineContainer = document.querySelector('.routine-container')
const createWorkoutContainer = document.querySelector('#create-workout-container')


export const onIndexExcerciseSuccess = (excercise) => {
    excercise.forEach((excercise) => {
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
    header.classList.remove('hidden')
    createWorkoutContainer.classList.add('show')
    createWorkoutContainer.classList.remove('hidden')
    store.userToken = userToken
}


export const onSignUpSuccess = () => {
    messageContainer.innerHTML = `Created new user`
    const signInBtnRedirect = document.createElement('btn')
    profileContainer.append(signInBtnRedirect)
    signUpContainer.classList.add('hidden')
    signInForm.classList.add('hidden')
    profileContainer.innerHTML = `
        <h1>Welcome! Click below to sign into your account</h1>
        <a href="index.html"><button id="sign-in-redirect-btn" type="button">Sign In</button></a>
    `

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
        const workoutHeaderDiv = document.createElement('div')
        workoutHeaderDiv.classList.add('workoutHeaderDiv')
        workoutDiv.classList.add('workoutDiv')
        const excercise = workout.routines
        
        workoutHeaderDiv.innerHTML = `
            <form>
                <table>
                <tr>
                    <td><h1><input name-id="${workout._id}" class="workout-name" name="workout-name" value="${workout.name.toUpperCase()}"/></h1></td>
                </tr>
                <tr>   
                    <td><button data-id="${workout._id}" id="delete-btn" value="delete-btn" class="btn btn-sm btn-outline-dark" type="button">delete workout</button></td>
                </tr>    
                </table>
            </form>
        `

        workoutDiv.innerHTML = `
            <form class="w3-container" workoutId="${workout._id}" id="${workout._id}-form">
                <table>                   
                    <tr>
                        <td><h2>Add an excercise</h2></td>      
                    </tr>
                    <tr>
                        <td><input class="hidden" type="text" " value=${workout._id} name="workoutId"></td>
                    </tr>
                    <tr>
                        <td><input class="w3-input  type="text" name="name" value="excercise name"></td>
                    </tr>
                    <tr>
                        <td><input class="w3-input  type="text" name="reps" value="reps"></td>   
                    </tr>
                    <tr>
                        <td><input class="w3-input  type="text" name="sets" value="sets"></td>
                    </tr>
                    <tr>
                        <td><input id="${excercise._id}-btn" name="${excercise.name}-form-submit" class="btn btn-sm btn-info"  type="submit" value="Add new excercise   "/></td>
                    </tr>
                    <tr>
                        <td><input type="submit" class="edit-workout-btn btn btn-sm btn-secondary" name="workout-edit"  value="Edit excercise"></td>
                    </tr>
                    </table>
                </form>
        `
        workoutContainer.append(workoutHeaderDiv)
        workoutContainer.append(workoutDiv)
        
        const routines = workout.routines
         routines.forEach((routine) => {
            const routineDiv = document.createElement('div')
            routineDiv.classList.add('routine-div')
            
            routineDiv.innerHTML = `
            <form id="test" data-id="${routine._id}">
                <table>
                <tr>
                    <td><h2> • ${routine.name}</h2></td>
                </tr>      
                    <tr>
                        <td><input class="hidden" type="text" value=${workout._id} name="workoutId"></td>
                    </tr>
                    <tr>    
                        <td><h4>Reps</h4><input class="w3-input  type="text" name="reps" value="${routine.reps}"></td>
                    </tr>
                    <tr>
                        <td><h4>Sets</h4><input class="w3-input  type="text" name="sets" value="${routine.sets}"></td>
                    </tr>
                    <tr>
                        <td><button id="${routine._id}-edit-btn"  type="submit">edit routine</button></td>
                    </tr>           
                </table>
            </form>   
            `

            routineDiv.addEventListener('submit', (event) => {  

                event.preventDefault()
                event.stopPropagation()
                
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
            workoutDiv.append(routineContainer)
            // remove line 180 in order for all btn functions to work. It doesn't allow edit-routine function to work
            workoutHeaderDiv.append(routineContainer)

          
        })

            workoutHeaderDiv.addEventListener('click', (event) => {
                event.preventDefault()
                event.stopPropagation()

                const id = event.target.getAttribute('name-id')
                if(!id) return

                const nameField = event.target.value
                
                const workoutInputData = {workout: {
                    name: nameField
                }
                }
                updateWorkout(workoutInputData, id)
                    .then(onUpdateWorkoutSuccess)
                    .catch(onFailure)
                })
                
            const deleteBtn = document.querySelector(`#delete-btn`)
            deleteBtn.addEventListener('click', (event) => {
                event.preventDefault()
                event.stopPropagation()
                const id = event.target.getAttribute('data-id')

                if(!id) return

                    deleteWorkout(id)
                        .then(onDeleteWorkoutSuccess)
                        .catch(onFailure)
                    })
                })
            }


export const onCreateNewWorkoutSuccess = (workoutInput) => {
    messageContainer.innerHTML = `Added new workout`
    const workoutDiv = document.createElement('div')
    workoutDiv.innerHTML = `
        <h2>Workout: ${workoutInput.name}<h2/>
    `
    workoutContainer.append(workoutDiv)
}

export const onUpdateWorkoutSuccess = () => {
    messageContainer.innerHTML = `Successfully updated workout`
}

export const onAddRoutineSuccess = () => {
    messageContainer.innerHTML = `Added new excercise`
}

export const onDeleteWorkoutSuccess = () => {
    messageContainer.innerHTML = `Successfully deleted workout`
}
