
class DatePicker{
  constructor(div_el, fn){
    this.div_el = div_el;
    this.callback = fn;
    console.log(fn.arguments.length);
  }
  //render executes the callback
  render(date){
    this.date = date;
    var result = fn();
    console.log("calling render");
    let parent = document.getElementById(this.div_el);
    var tbl = document.createElement("TABLE");
    tbl.setAttribute(this.div_el,"table");
    parent.appendChild(tbl);
    
    let tr_first = document.createElement("TR");
    tr_first.setAttribute("id","tr_first");
    tbl.appendChild(tr_first);

    let td_first = document.createElement("TD");
    td_first.setAttribute("id","td_first");
    let date_1 = document.createTextNode("1");
    td_first.append(date_1);
    tr_first.appendChild(td_first);
      //
  }  
}

//this is replicate of HTML js code, can run node.js here
var datePicker = new DatePicker("div1", function (id, fixedDate) {
    console.log("DatePicker with id", id,
        "selected date:", fixedDate.month + "/" + fixedDate.day + "/" + fixedDate.year);
 });
 datePicker.render(new Date("July 4, 1776"));