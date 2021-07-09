import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

private role: string 

private isConnected: boolean

    public getRole(): string {
        return this.role;
    }

    public setRole(role: string): void {
        this.role = role;
    }

    public isIsConnected(): boolean {
        return this.isConnected;
    }

    public setIsConnected(isConnected: boolean): void {
        this.isConnected = isConnected;
    }


  constructor() { }
}
