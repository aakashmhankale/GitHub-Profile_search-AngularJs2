import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class GithubService{
    private username:string;
    private client_id = 'eb0e1d1a9a1ee7938a14';
    private client_secret = '99f66086256dd454e234c82f6dd752f9895f19a2';
    
    constructor(private _http: Http){
        console.log('Github Service Ready...');
        this.username = 'aakashmhankale';
    }
    
    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret)
            .map(res => res.json());
    }
    
    updateUser(username:string){
        this.username = username;
    }
}