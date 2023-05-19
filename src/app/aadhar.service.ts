import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Aadhar } from './aadhar';

@Injectable({
  providedIn: 'root'
})
export class AadharService {
  

  // aadhar : Aadhar = new Aadhar();
  id:any;
  constructor(private httpClient : HttpClient) { }

  searchAadhar(aadharNum: any) {
    return this.httpClient.get("/aadhar/list2/"+aadharNum);
  }

  getAadharList(): Observable<Aadhar[]>{
    return this.httpClient.get<any>("/aadhar/list");
  }

  createAadhar(aadhar :Aadhar): Observable<Object>{
    return this.httpClient.post("/aadhar/addCitizen",aadhar);
  }

  updateAadhar(a:any){
    return this.httpClient.put("/aadhar/list1",a);
  }

  // getCitizenById(id:string): Observable<Aadhar>{
  //   return this.httpClient.get("/aadhar/list2/"+id);
  // }

  getId(getId:any)
  {
    this.id = getId;
  }

  delete(aadharNum:any)
  {
    return this.httpClient.delete("/aadhar/list/"+aadharNum);
  }

  link(a : any){
    return this.httpClient.put("/aadhar/link",a);
  }

  checkLink(a : any){
    return this.httpClient.put("/aadhar/linkStatus",a);
  }
}
