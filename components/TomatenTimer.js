import React, { useState, useRef } from "react"
import { Button, Text, View } from "react-native"

const TomatenTimer = ()=>{
    const [timer, setTimer]=useState(0)
    const [isActive, setIsActive]=useState(false)
    const [isPaused, setIsPaused]=useState(false)
    const countRef = useRef(null)
    return(
        <View>
            <Text>{timer}</Text>
            <Button onPress={handleStart} title="start"/>
            <Button onPress={handlePause} title="pause"/>
            <Button onPress={handleResume} title="resume"/>
            <Button onPress={handleReset} title="reset"/>
        </View>
    )
    function handleStart(){
        setIsActive(true)
        setIsPaused(true)
        countRef.current = setInterval(()=>{
            setTimer((timer)=>timer+1)
        },1000)
    }
    function handlePause(){
        clearInterval(countRef.current)
        setIsPaused(false)
    }
    function handleResume(){

    }
    function handleReset(){

    }
}
export default TomatenTimer