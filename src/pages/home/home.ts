import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  usersList: any[]=[]
  name: any;
  rates : [][]

  constructor(public http: HttpClient) {

    this.http.get('https://lieservices.luluone.com:9443/liveccyrates?payload={%22activityType%22:%22rates.get%22,%22aglcid%22:784278,%22instype%22:%22LR%22}')

    .subscribe(data=>{
    //process the json data
    console.log(data)
    this.usersList=data["payload"]
    console.log(this.usersList)
    //alert(this.usersList.rates[0].ccyname)
    this.name = this.usersList.rates[0].frmccy

})

  }

}
