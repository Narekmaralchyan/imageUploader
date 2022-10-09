import React, { useRef, useState } from 'react'
import "./App.css"
import Uploader from './Components/Uploader'
import Card from './Components/Card'
import Header from './Components/Header'
import CardList from './Components/CardList'
// function createState (reducer,initialState){
//   let state = initialState;
//   function getState (){
//     return state;
//   }
//   function dispatch(action){
//     state = reducer(state , action)
//   }
//     return [getState, dispatch ]
// }

// const ACTION_TYPES = {
//   ADD_TODO:"ADD_TODO",
//   EDIT_TODO:"REMOVE_TODO",
//   DELETE_TODO:"DELETE_TODO",
// }

// const [ getState, dispatch] = createState(reducer, []);

// function reducer(state, action){
//   const { payload } = action
//   switch (action.type){
//       case ACTION_TYPES.ADD_TODO: {
//           return [
//             ...state,
//               payload,
//           ]
//       }
//       case ACTION_TYPES.EDIT_TODO:{
//         const { id, ...rest } = payload;

//         return state.map( todo => {
//             if (todo.id === id){
//                 return {...todo, ...rest }
//             }
//             return  todo;
//         } )
//       }
//       case ACTION_TYPES.DELETE_TODO:{
//         const {id} = payload;
//         return state.filter(todo=>todo.id != id)
//       }
//   }
// }


// dispatch( { 
//       type: ACTION_TYPES.ADD_TODO, 
//       payload: {
//         value:"hello",
//       } } );
// getState(); // -> most recent state 

export default function App() {

const [images,setImages] = useState([])

  function changeImageState(src){
    setImages([...images,...src])
    }

  function onCheckChange(id){
    setImages(images.map(image=>{
      if(image.id == id) {
        image.selected = !image.selected;
        return image;
      }
      return image;
    }))
  }
  function handleSelectAllChange (){
    if(images.every(image=>image.selected)){
      setImages(images.map(image=>{
        image.selected = false;
        return image;
      }))
    }
    else{
      setImages(images.map(image=>{
        image.selected = true;
        return image;
      }))
    }
  }

  function deleteItems(){
    setImages(images.filter(image=>!image.selected))
  }

  return (
    <div className='App'>
      <Header allSelected={images.every(image=>image.selected)} deleteItems={deleteItems} buttonsDisabled ={!images.length} handleSelectAllChange={handleSelectAllChange}  />
      <Uploader changeImageState={changeImageState} />
      <CardList data={images} onCheckChange={onCheckChange} />
    </div>
  )
}  