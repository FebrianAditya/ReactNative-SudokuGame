import React, { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { View, TextInput, StyleSheet, Text } 
from 'react-native'
import { geBoard } from "../store/actions"

export default ({ row, rowIdx }) => {

  const board = useSelector(state => state.board)

  const dispatch = useDispatch()

  let tempBoard = JSON.parse(JSON.stringify(board))

  function onChangeHandler(text, rowIdx, idx){
      tempBoard[rowIdx][idx] = Number(text)
      dispatch(setBoardValue(tempBoard))
  }

  useEffect(() => {
    // console.log("Love you")
    dispatch(geBoard())
  }, [])


  return (
    <View style={styles.container}>
       {row.map((el, idx)=>{
        if(el != 0){
          return (
            <TextInput
           style = {{ height: 40, width: 40, borderColor: 'black', borderWidth: 2, textAlign: "center"}}
          //  value = {`[${rowIdx}][${idx}]`} 
           value = {`${el}`}
           key = {idx}
           onChangeText= {text => onChangeHandler(text, rowIdx, idx)}
           keyboardType = "number-pad"
         />
           )
        }
        else {
          return (
            <TextInput
            style = {{ height: 40, width: 40, borderColor: 'black', borderWidth: 2, textAlign: "center"}}
            value = ""
            key = {idx}
            keyboardType = "number-pad"
            onChangeText= {text => onChangeHandler(text, rowIdx, idx)}
          />
          )
        }
       })}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row'
  }
})