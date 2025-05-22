import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'summary',
    standalone:true
})

export class SummaryPipe implements PipeTransform{
    transform(value: string, args: number=6) {
        if(!value) return '';
        return value.length > args ? value.substring(0,args) + '...' :value;
    }
    
}