
'use strict'

class DatePicker{
  constructor(div_el, fn){
    this.id = div_el;
    this.callback = fn;
  }
  //render executes the callback
  render(date){
    //this.date = new Date(date);
    console.log("this.div_el".this.id);
    let parent = document.getElementById(this.div_el);
    let tbl = document.createElement("TABLE");
    console.log("parent:",parent)
    parent.appendChild(tbl);
    
    
    
    let header = table.createTHead();
    let header_row = header.insertRow(0);
    
    let leftArrow = header_row.insertCell(0);
    leftArrow_Cell.textContent='<';
    leftArrow_Cell.setAttribute("id", 'leftArrow');

    let rightArrow = header_row.insertCell(-1);
    rightArrow.textContent='>';
    rightArrow.setAttribute("id", 'rightArrow');

    //let tr_first = document.createElement("TR");
    //tr_first.setAttribute("id","tr_first");
    //tbl.appendChild(tr_first);

    //let td_first = document.createElement("TD");
    //td_first.setAttribute("id","td_first");
    //let date_1 = document.createTextNode("1");
    //td_first.append(date_1);
    //tr_first.appendChild(td_first);
    
  }  
}

//this is replicate of HTML js code, can run node.js here
//var datePicker = new DatePicker("div1", function (id, fixedDate) {
//    console.log("DatePicker with id", id,
//        "selected date:", fixedDate.month + "/" + fixedDate.day + "/" + fixedDate.year);
// });
// datePicker.render(new Date("July 4, 1776"));