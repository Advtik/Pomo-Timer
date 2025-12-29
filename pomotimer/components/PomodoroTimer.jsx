import React, { useState } from 'react'
import { useEffect } from 'react'


const PomodoroTimer = () => {
    const timer25={
        Focus:25,
        Break:5
    }
    const timer50={
        Focus:50,
        Break:10
    }
    const timer90={
        Focus:90,
        Break:30
    };
    const timerStates=[timer25,timer50,timer90];
    const [timerState,setTimerState]=useState(pomo25);
    const [focus,setFocus]=useState(false);
    const [brk,setBrk]=useState(false);
    const [pause,setPause]=useState(false);
    const [pomoStates,setPomoStates]=useState(null);
    useEffect(()=>{
        if(focus){
            const remainingTime=timerState.Focus*60;
            if(remainingTime<=0){
                //interval band karde laadle
                setFocus(false);
                setBrk(true);
            }
            const interval=setInterval(()=>{
                
            },1000);
        }
        if(brk){
            const remainingTime=timerState.Break*60;
            if(remainingTime<=0){
                //interval band karde laadle
                setFocus(false);
                setBrk(true);
            }
            
        }
    },[focus,brk,pause,timerState])
  return (

    <div>PomodoroTimer</div>
  )
}

export default PomodoroTimer