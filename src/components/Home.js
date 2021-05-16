import React from 'react'
import india from '../images/india.png';
import {useEffect,useState} from 'react';
import styled from 'styled-components';
import corona from '../images/corona.png';
import refreshicon from '../images/refreshicon.png';



const Home = () => {
    const[stateNum,setStateNum]=useState(15);
    const [animate,setAnimate]=useState();
    const[stateName,setStateName]=useState();
    const[cases,setCases]=useState();
    const[recovered,setRecovered]=useState();
    const[active,setActive]=useState();
    const[deaths,setDeaths]=useState();


  
    const update= async()=>{
     const data= await fetch('https://api.covid19india.org/data.json');
     const newData= await data.json();
     setStateName(newData.statewise[stateNum].state);
     setCases(newData.statewise[stateNum].confirmed);
     setRecovered(newData.statewise[stateNum].recovered);
     setActive(newData.statewise[stateNum].active);
     setDeaths(newData.statewise[stateNum].deaths);



     
    }
    
    useEffect(()=>{
        update();
       
        
    },[]);
    

    const refresh=()=>{
        setAnimate('spin 1.5s ease ');
        update();
       
       
        setTimeout(()=>{
            
            setAnimate('');
        },2000);
    }
    
    return (
       <Container>
          
          <Map>
          <img src={india} alt="" />
          <StateInfo>
              <h1>{stateName}</h1>
          </StateInfo>
          <Nine onClick={()=>{
             setStateNum(9);
            refresh();
         }}></Nine>
         <Fifteen onClick={()=>{
             setStateNum(15);
             refresh();
         }}></Fifteen>
          <Fifteen onClick={()=>{
             setStateNum(15);
             refresh();
         }}></Fifteen>
         <ThirtyFive onClick={()=>{
             setStateNum(35);
             refresh();
         }}></ThirtyFive>
          </Map>
          <Data>
            <Upper>
                <ImgWrapper> <img src={corona} alt="" /></ImgWrapper>
               
                <Total>
                    <h1>{cases}</h1>
                    <p>Total cases</p>
                </Total>
            </Upper>
            <Lower>
            <Recovered>
                    <h1>{recovered}</h1>
                    <p>Recovered</p>
                </Recovered>
                <Active>
                    <h1>{active}</h1>
                    <p>Active</p>
                </Active>
                <Deaths>
                    <h1>{deaths}</h1>
                    <p>Deaths</p>
                </Deaths>
            </Lower>
            <Refresh rotate={animate} onClick={refresh}>
                <img src={refreshicon} style={{animation:animate}} alt="refresh" />
            </Refresh>
          </Data>
                
         
          </Container>
    )
}

export default Home;

const Container=styled.div`
background-color:#fff;
min-width:425px;
padding-top:20px;
height:100vh;
display:flex;
flex-direction column;
align-items:center;
`


const Map=styled.div`
width:400px;
height:400px;

background: linear-gradient(180deg, #e3ffe7 0%, #d9e7ff 100%);
border-radius:10px;

padding:10px;
position:relative;
box-shadow:0px 5px 10px  rgba(1,1,1,.2);
img{
    height:100%
}
`
const StateInfo=styled.div`
background: linear-gradient(0deg, #4b6cb7 0%, #182848 100%);

position:absolute;
border-radius:10px;
box-shadow:0px 5px 10px rgba(0,0,0,0.2);
padding:10px;
bottom:-20px;
right:30px;
h1{
    font-size:15px;
    font-weight:600;
    text-transform:uppercase;
    color:#fff;
}
`
const Data=styled.div`
height:300px;
margin-top:40px;
width:400px;
background: linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%);
border-radius:10px;
padding:10px;
position:relative;
box-shadow:0px 5px 10px  rgba(1,1,1,.2);
`
const Upper=styled.div`
display:flex;
height:50%;
width:100%
`
const ImgWrapper=styled.div`
width:40%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
img{
    height:100%;
    animation:spin2 10s linear infinite;
    margin-top:20px;
    margin-left:20px;
}
`
const Total=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
width:100%;
h1{
    color:#222;
    font-weight:800;
}
`
const Lower=styled.div`

height:50%;
width:100%;
display:flex;
align-items:center;
justify-content:space-between;
background-color:rgba(255,255,255,0.5);
box-shadow:0px 5px 10px  rgba(1,1,1,.2);
border-radius:10px;
`
const Recovered=styled.div`
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
flex:0.3;
height:100%;
padding:1rem;
h1{
    font-size:15px;
    color:#222;
    font-weight:800;
}
p{
    font-size:18px;
    color:#42f587;
    font-weight:800;
}
`
const Active=styled.div`
flex:0.3;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
height:100%;
padding:1rem;
h1{
    font-size:15px;
    color:#222;
    font-weight:800;
}
p{
    font-size:18px;
    color:#44dbd9;
    font-weight:800;
}
`
const Deaths=styled.div`
flex:0.3;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
padding:1rem;
h1{
    font-size:15px;
    color:#222;
    font-weight:800;
}
p{
    font-size:18px;
    color:#cf1e15;
    font-weight:800;
}
`
const Refresh=styled.div`
width:60px;
height:60px;
display:flex;
align-items:center;
justify-content:center;
border-radius:100px;
background: linear-gradient(0deg, #4b6cb7 0%, #182848 100%);
position:absolute;
bottom:0;
left:50%;
transform:translate(-50% , 50%);
box-shadow:0px 5px 10px  rgba(1,1,1,.2);




img{
    height:60%;
    filter:invert(1);
   
}

`

const Fifteen=styled.div`
background-color:white;
border-radius:40px;
height:15px;
width:15px;
position:absolute;
box-shadow:0px 5px 10px  rgba(1,1,1,.2);

top: 183px;
left: 220px;
z-index:10;
animation:pulse 2s linear infinite;
`

const Nine=styled.div`
background-color:white;
border-radius:40px;
height:15px;
width:15px;
position:absolute;
box-shadow:0px 5px 10px  rgba(1,1,1,.2);

top: 118px;
left: 118px;
z-index:10;
animation:pulse 2s linear infinite;

`
const ThirtyFive=styled.div`
background-color:white;
border-radius:40px;
height:15px;
width:15px;
position:absolute;
box-shadow:0px 5px 10px  rgba(1,1,1,.2);

top: 150px;
left: 165px;
animation:pulse 2s linear infinite;
z-index:10;
`