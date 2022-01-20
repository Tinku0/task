import { Injectable } from "@angular/core";

var menu = [
    {
        name:'Dashboard',nav:'/dashboard',access:{np:true,lp:true,latestp:true,pc:true,lu:true}
    }
];

@Injectable({
    providedIn: 'root'
})

export class DataService{

    setMenu(name : any,access : any){
        let menuItem = { name : name,nav:'/dashboard/'+name,access:access };
        menu.push(menuItem);
        console.log(menu)
    }

    getMenu(){
        return menu;
    }

}