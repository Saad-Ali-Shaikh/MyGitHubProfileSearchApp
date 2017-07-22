import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
@Injectable()
export class GitHubService{
    private username: string;
    private clientId = '32a5e845f3907aef82a2';
    private clientSecret = 'ba363bcce20cb1f6003c271b3bae2f6b19c33d9b';

    constructor(private _http: Http){
        console.log('Github service ready');
        this.username = 'Saad-Ali-Shaikh';
    }

    getUser(){
        return this._http.get('http://api.github.com/users/'+this.username + '?client_id' + this.clientId + "&client_secret="+this.clientSecret)
        .map(res => res.json());
    }
    
    getRepos(){
        return this._http.get('http://api.github.com/users/'+this.username + '/repos?client_id' + this.clientId + "&client_secret="+this.clientSecret)
        .map(res => res.json());
    }

    updateUser(username:string){
        this.username = username;
    }

}