import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipecount',
  pure: false
})
export class PipecountPipe implements PipeTransform {

  transform(value: any) {
    let firstDate:Date = new Date(value);
    let currentDate:Date = new Date();
     //gets the value of the original date
    //let todayWithTime:any = new Date(today.getHours(),today.getMinutes(),today.getSeconds())
      let timeDifferenceSeconds = Math.round(Math.abs((currentDate.getTime()-firstDate.getTime())/1000));
      let days = Math.round(Math.abs((timeDifferenceSeconds)/86400))
      let minutes = Math.round(Math.abs((timeDifferenceSeconds)/60))
      let hours = Math.round(Math.abs((minutes)/60))
      

      if (timeDifferenceSeconds<30){
        return "a few seconds ago"
      }
        else if(timeDifferenceSeconds > 30 && timeDifferenceSeconds<60){
          return "less than a minute ago"

        }
        else if(timeDifferenceSeconds>=60 && minutes>0 && minutes<60){
          return minutes + " " + " minutes ago"
        }

        else if(minutes >= 60 && hours>0 && hours<24){
          return hours + " " + " hours ago"
        }
        else if(hours>24 && days>0){
          return days + " "+ " days ago"
        }

      
    // let timeDifference = Math.abs(value - todayWithTime) //returns in milliseconds
    // let timeDifferenceSeconds = timeDifference * 0.001
    // let timeDifferenceminutes = timeDifferenceSeconds/60
    // let timeDifferencehours = timeDifferenceminutes/60
    
    // if (timeDifferenceSeconds>=1 && value > todayWithTime && timeDifferenceSeconds<=60){
    //   return timeDifferenceSeconds 
    // }
    // else if(timeDifferenceminutes>=1 && value > todayWithTime && timeDifferenceminutes<=60){
    //   return timeDifferenceminutes
    // }
    // else{
    //   return timeDifferencehours
    //}

    

  }

}
