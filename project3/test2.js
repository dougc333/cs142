class Test{
    constructor(a,b){
      this.a=a;
      this.b=b;
    }

    render(Date){
      this.date = Date; //when is this a good idea? keep on adding to this? 
      console.log(Date);
    }
    foo(){
      console.log(this.date);
    }
}

t = new Test(10,20);
t.render("1/2/2020");
t.foo();