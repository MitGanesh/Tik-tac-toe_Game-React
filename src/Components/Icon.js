import React from 'react'
import { VscCircleLargeOutline,VscChromeClose} from "react-icons/vsc";

export default function Icon({name}) {
  
    switch (name) {
        case "circle":
            return <VscCircleLargeOutline className='icon'/>

        case "cross":
            return <VscChromeClose className='icon'/>

        default:
            return 
    }
}
