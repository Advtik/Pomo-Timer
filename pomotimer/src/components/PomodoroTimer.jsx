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
    const [timerState,setTimerState]=useState(timer25);
    const [focus,setFocus]=useState(false);
    const [brk,setBrk]=useState(false);
    const [pause,setPause]=useState(false);
    const [pomoStates,setPomoStates]=useState(null);
    const [minute,setMinute]=useState(timerState.Focus);
    const [second,setSecond]=useState(0);
    let minutes,seconds;
    useEffect(()=>{
        if(focus){
            setMinute(timerState.Focus);
            setSecond(0);
            let remainingTime=timerState.Focus*60;
            minutes=remainingTime/60;
            seconds=remainingTime%60;
            const interval=setInterval(()=>{  
                if(remainingTime<=0){
                    //interval band karde laadle
                    setFocus(false);
                    setBrk(true);
                }
                if(!pause){
                    remainingTime--;
                }
                else{
                    clearInterval(interval);
                }
                minutes=remainingTime/60;
                seconds=remainingTime%60;
                setMinute(Math.floor(minutes));
                setSecond(seconds);
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
    console.log(timerState);
    const handlepomo25=()=>{
        setPause(false);
        setTimerState(timer25);
        setFocus(true);
        setBrk(false);
    }
    
  return (
    <div>
        <div>PomPom</div>
        <button onClick={handlepomo25}>timer25</button>
        <button onClick={()=>{setTimerState(timer50)}}>timer50</button>
        <button onClick={()=>{setTimerState(timer90)}}>timer90</button>
        <div className="minute">{minute}</div>
        <div className="second">{second}</div>
    </div>
  )
}

export default PomodoroTimer