

'use strict'

class DatePicker{
  constructor(id, fn){
    this.id = id;
    this.callback = fn;
    this.months=["January", "February","March", "April","May", "June", "July", "August", "September",
    "October","November","December"];
    this.daysOfWeek = ["Su", "Mo","Tu","We","Th","Fr","Sa"];
  }
  render(date){
    let parent = document.getElementById(this.id);
    let table = document.createElement("table");
    parent.appendChild(table);
    let header = table.createTHead();
    let arrowRow = header.insertRow(0);
    
    let leftArrowCell = arrowRow.insertCell(0);
    leftArrowCell.textContent="<"
    leftArrowCell.setAttribute("id","leftArrow");
    
    let spaces = arrowRow.insertCell(1);
    //console.log(date.getMonth(), date.getFullYear());
    spaces.textContent= this.months[date.getMonth()] +" " + date.getFullYear();
    spaces.colSpan="5"; //not work
   
    let rightArrowCell = arrowRow.insertCell(-1);
    rightArrowCell.textContent=">"
    rightArrowCell.setAttribute("id","rightArrow");
    
    let weekRow = header.insertRow(1);
    for (let i=0;i<this.daysOfWeek.length;i++){
      let dayCell = weekRow.insertCell(i);
      dayCell.textContent=this.daysOfWeek[i];
    }
    
    //set days. 

    let numDays_month = this.num_days_month(date);
    //let firstDay_month = new Date(date.getFullYear(), date.getMonth(),1).getDate();
    
    console.log("numDays_month:",numDays_month);
    let current_row_index=2;
    let num_days=1;
    while(num_days <= numDays_month){
      console.log("num_days:",num_days,"numDays_month:",numDays_month);
      let add_row = table.insertRow(current_row_index);
      //add rows 
      if (current_row_index===2){
          //first week weird
          let day_of_week = date.getDay();
          console.log("day_of_week:",day_of_week);
          //go backwards w/pevious month
          let ldpm = new Date(date.setDate(0)).getDate(); 
          console.log("lpdm:",ldpm);
          //let start_last_month = day_of_week
          for (let i=0;i<day_of_week;i++){
            console.log("iterating back first week",i);
            console.log("index:",ldpm-(day_of_week)+i);
            let index = ldpm-(day_of_week)+i
            let back_cell = add_row.insertCell(i);
            back_cell.textContent=index.toString();
          } 
          
          //go forward w/current month
          for(let i=day_of_week;i<this.daysOfWeek.length;i++){
            console.log("iterting forwards first week:",i);
            let forward_cell = add_row.insertCell(i);
            forward_cell.textContent=num_days;
            num_days++;
          }          
          
      }
      if(current_row_index>2){
        for (let i=0;i<this.daysOfWeek.length;i++){
          let cell_day = add_row.insertCell(i);
          if(num_days<=numDays_month){
            cell_day.textContent=num_days;
          }
          num_days++;
        }
      }
      current_row_index++;
      console.log("last loop current_row_index:",current_row_index, "num_days:",num_days);
    }//end while
  }//end render
  
  num_days_month(date){
    return new Date(date.getFullYear(), date.getMonth(),0).getDate();
  }
  num_days_prev_month(date){
      return new Date(date.setDate(0));
  }
  last_day_prev_month(date){
      return new Date(date.setDate(0)).getDate(); 
  }

}//end class

