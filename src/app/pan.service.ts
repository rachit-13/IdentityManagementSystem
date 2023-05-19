import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pan } from './pan';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PanService {

  constructor(private httpClient : HttpClient) { }

  getPanList(): Observable<Pan[]>{
    return this.httpClient.get<any>("/pan/list");
  }

  createPan(pan :Pan): Observable<Object>{
    return this.httpClient.post("/pan/addCitizen",pan);
  }

  delete(panNum:any)
  {
    return this.httpClient.delete("/pan/list/"+panNum);
  }

  searchPan(panNum: any) {
    return this.httpClient.get("/pan/list2/"+panNum);
  }

  updatePan(a:any){
    return this.httpClient.put("/pan/list1",a);
  }
}
