import {Pipe,PipeTransform} from "@angular/core";

@Pipe({
    name:'reverse'
})
export class reversePipe implements PipeTransform{
    transform(arg1){
        var data="";
    for(var i=0; i<arg1.lenght;i++){
        data = arg1[i]+data;
    }
    return data;
    }
    
}