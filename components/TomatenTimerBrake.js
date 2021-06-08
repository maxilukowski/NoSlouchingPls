import React from "react"
import { Button} from 'react-native'

const TomatenTimerBrake = ({setIsBrake}) => {
    return(
        <Button onPress={()=>setIsBrake(false)} title="go Back"/>
    )
}

export default TomatenTimerBrake