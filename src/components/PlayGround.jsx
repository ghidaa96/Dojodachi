import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect} from 'react';
import pet from '../assest/source.gif';
import Deadpet from '../assest/deadPet.jpg';
import { ProgressBar} from 'react-bootstrap';

const PlayGround = (props) => {
    const [happiness, setHappiness] = useState(20);
    const [fullness, setFullness] = useState(20);
    const [energy, setenergy] = useState(50);
    const [meals, setmeals] = useState(3);
    const [like, setlike] = useState(1);
    const [message, setMessage] = useState("");
    
    useEffect(()=>{
        if(happiness ===0 || fullness===0){
            console.log("I'm here");
            setMessage("");
            setMessage("Your Pet has Passed away");
        }else if(happiness ===100 && fullness===100 && energy ===100){
            setMessage("");
            setMessage("Congratulations!! You win.");
        }

    },[happiness,fullness,energy])
    const isLike=()=>{
        var like =[1,1,1,0]
        var randomItem = like[Math.floor(Math.random()*like.length)];
        setlike(randomItem);
    }
    const feed =()=>{
        
        if(meals > 0 ){
        isLike();
        setmeals(meals-1);
        console.log(like);
        if(like === 1){
            var number =Math.floor(Math.random() * (10 - 5 + 1) + 5)
            setFullness(fullness+ number);
            setMessage("You feed your Pet!! Fullness +"+number+" Meal -1")
        }else{
            
        setMessage("You feed your Pet!! But he dislike the meal!! Meal -1")
    }
    
}else{
    setMessage("You out of meals!! You can gain more by WORK")
}

    };
    const play =()=>{
        
        isLike();
        if (energy > 0){
        setenergy(energy-5);
        console.log(like);
        if(like === 1){
            var number =Math.floor(Math.random() * (10 - 5 + 1) + 5)
            setHappiness(happiness+number);
            setMessage("You Played with your Pet!! Happiness +"+number+" Energy -5")
        }else{
            setMessage("You Played with your Pet!! But he dislike it!! Energy -5")

        }
    }else{
        setMessage("You don't have energy!! you can gain more by SLEEP")
    }
    

    };
    const work =()=>{
        if (energy > 0){
        setenergy(energy-5);
        var number = Math.floor(Math.random() * 3) + 1;
        setmeals(meals+number);
        setMessage("You Worked with your Pet!! Meals  +"+number+" Energy -5")
        }else{
            setMessage("You don't have energy!! you can gain more by SLEEP")  
        }
        
    };
    const sleep =()=>{
        
        if(happiness >0 && fullness>0){
        setenergy(energy+15);
        setFullness(fullness-5);
        setHappiness(happiness-5);
        setMessage("Your Pet slept!!  Energy +15 !! Fullness -5 !! Happiness -5");
        
        } 
        
    };
    const restart =()=>{
        setenergy(50);
        setFullness(20);
        setHappiness(20);
        setmeals(3);
        setMessage("");
        
    };
    
    return (
        <div className="continer">
            <div className="row d-flex justify-content-around  border p-4">
                <div className="progressBar  ">
                <h2 className="text-secondary "> Happiness </h2>
                <ProgressBar striped variant="success" now={happiness} max={100} min={0} animated/>
    </div>
    <div className="progressBar ">
                <h2 className="text-secondary "> Fullness </h2>
                <ProgressBar striped variant="info" now={fullness} max={100} min={0}animated/>
    </div>
    <div className="progressBar ">
                <h2 className="text-secondary "> Energy </h2>
                <ProgressBar striped variant="warning" now={energy} max={100} min={0} animated/>
    </div>
    <div className="progressBar ">
                <h2 className="text-secondary "> Meals </h2>
                <ProgressBar striped variant="danger" now={meals} max={100} min={0} animated/>
    </div>
                
            </div>
            

            <div className="row justify-content-md-center">
                <div className="col-md-4">
                {(happiness ===0 || fullness===0)?
                <img className="img-fluid" src={Deadpet} alt="pet" />:
                <img className="img-fluid" src={pet} alt="pet" />}
                    
                </div>
            </div>
            <div className="row justify-content-md-center">
                
                    {message  ?
                    <h4 className="text-monospace text-danger ">{message}</h4>:''

                    }
                
            </div>
            {(happiness ===0 || fullness===0) ||(happiness ===100 && fullness===100 && energy ===100)? 
            <div className="row justify-content-md-center">
                <button type="button" className="btn btn-lg btn-outline-secondary" onClick={restart} >Restart?</button>
            </div>: 
            <div className="row d-flex justify-content-around  border p-4">
                <button type="button" className="btn btn-lg btn-outline-secondary" onClick={feed} ><h2>Feed</h2></button>
                <button type="button" className="btn btn-lg btn-outline-secondary" onClick={play} ><h2>Play</h2></button>
                <button type="button" className="btn btn-lg btn-outline-secondary" onClick={work}><h2>Work</h2></button>
                <button type="button" className="btn btn-lg btn-outline-secondary" onClick={sleep}><h2>Sleep</h2></button>

        </div>}
            


        </div>
    );

};
export default PlayGround;