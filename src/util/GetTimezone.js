

export default function getTimezone(timezone, dTxt){

    const AST	= -10800 , EST= -14400, CST = -18000, MST =	-21600 , PST = -25200,
          AKST = -28800, HAST = -36000//, WST = -46800

      switch(timezone){
          case AST: 
          return dTxt.includes("15:00:00")//12pm
            
          case EST: 
          return dTxt.includes("18:00:00")//2pm

          case CST:
          return dTxt.includes("18:00:00")//1pm
       
          case PST: 
          return dTxt.includes("21:00:00")//2pm 

          case AKST: 
          return dTxt.includes("21:00:00")//12pm

          case HAST: 
          return dTxt.includes("00:00:00")//2pm

          case MST: 
          return dTxt.includes("18:00:00")//12pm

          default:
              return dTxt.includes("18:00:00")
      }
}