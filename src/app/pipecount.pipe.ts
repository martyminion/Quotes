import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipecount'
})
export class PipecountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); //gets current day
    let todayWithTime:any = new Date(today.getSeconds())

    let timeDifference = Math.abs(value - todayWithTime) //returns in milliseconds
    let timeDifferenceSeconds = timeDifference * 0.001
    let timeDifferenceminutes = timeDifferenceSeconds/60
    let timeDifferencehours = timeDifferenceminutes/60
    
    if (timeDifferenceSeconds>=1 && value > todayWithTime && timeDifferenceSeconds<=60){
      return timeDifferenceSeconds 
    }
    else if(timeDifferenceminutes>=1 && value > todayWithTime && timeDifferenceminutes<=60){
      return timeDifferenceminutes
    }
    else{
      return timeDifferencehours
    }

    

  }

}
