import React from "react";
import TextTransition, { presets } from 'react-text-transition';
export function Advertisement(){
   

const TEXTS = ['Hotels', 'Apartment', 'Villa', 'Resort'];


  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000, // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
    return(
        <>
        <div className="adMain ">
       <div className="adtext ">
       
       
        <h1 className="text-info">Find </h1>
      <h1 className="text-warning"><TextTransition  springConfig={presets.wobbly}> {TEXTS[index % TEXTS.length]}</TextTransition></h1><br/>
      <h1 className="text-info">For Your next trip </h1>
       
      
       <button className="btn btn-primary">Discover Homes</button>
      
      
       
     
    </div>
    </div>
        </>
    );
}