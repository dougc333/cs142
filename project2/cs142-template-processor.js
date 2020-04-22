
'use strict';

function Cs142TemplateProcessor(my_template){
    this.template = my_template;
}

Cs142TemplateProcessor.prototype.fillIn=function(my_dict){
    let process_me = this.template;
    Object.keys(my_dict).forEach(function(key) {
        //console.log(key, my_dict[key]);
        //console.log("this.template:",template);
        //let t = 'My favorite month is {{month}} but not the day {{day}} or the year {{year}}';
        process_me = process_me.replace('{{'+key+'}}',my_dict[key]);
    });
    let test_match = process_me.match(/{{[^}]*}}/g);
    if (test_match !==null){
        //console.log('test_match:',test_match);
        //replace the testmatch with a space
        //console.log(test_match.length,"replacing the re result array with space");
        let clean_me = "";
        for (let i=0;i<test_match.length;i++){
            clean_me = process_me.replace(test_match[i],"");
            //console.log("clean_me:",clean_me);
        }
        return clean_me;
    }
    return process_me;
};

