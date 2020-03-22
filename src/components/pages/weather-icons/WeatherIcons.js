import React from 'react';

const WeatherIcons = ({iconPhrase, height}) => {
    let img = 'clouds.png';
   
    if (iconPhrase >= 1 && iconPhrase <= 5) {
        img = 'sunny.png';
      } else if ((iconPhrase >= 20 && iconPhrase <=21) || iconPhrase ===6) {
          img = 'sunny with clouds.png'
      }
      else if((iconPhrase>=7 && iconPhrase<=8)|| iconPhrase===11 || iconPhrase===19){
        img = 'clouds.png'
      }
      else if((iconPhrase>=12 && iconPhrase<=18 ) || iconPhrase===26){
        img = 'rain.png'
      }
      else if((iconPhrase>=13 && iconPhrase<=14 )|| (iconPhrase>=16 && iconPhrase<=17)){
        img = 'sun with rain.png'
      }
      else if((iconPhrase>=22 && iconPhrase<=30) || iconPhrase===29){
        img = 'snow.png'
      }
      else if(iconPhrase===15 ){
        img = 'rainstorm.png'
      }
      else if(iconPhrase===30){
        img = 'hot.png'
      }
      else if(iconPhrase===31){
        img = 'cold.png'
    }
    else if(iconPhrase===32){
        img = 'cold.png'
    }
    else{
        img = 'clouds.png'
    }
    
    return (<img src={require('../../../images/'+img)} className='image-style'  alt='icon' />);
  };

  export default WeatherIcons;