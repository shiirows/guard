import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.css']
})
export class RessourceComponent implements OnInit {



  Logo = {
    caddy: "https://api.freelogodesign.org/files/82a16b81043841bb81a883906d64f396/thumb/logo_200x200.png?v=0",
    w3c: "https://api.freelogodesign.org/files/06790acde77c43c78a0661c64e7c3c03/thumb/logo_200x200.png?v=637538608080000000",
    deepl: "https://api.freelogodesign.org/files/5de315f513e64502a093d4e6d774b4f0/thumb/logo_200x200.png?v=0",
    duckdns: "https://api.freelogodesign.org/files/5e39da400fe94c2494098fe514f5d1c7/thumb/logo_200x200.png?v=0",
    cssdiner: "https://api.freelogodesign.org/files/ffd29f86113e495599f1ad42fd53ba29/thumb/logo_200x200.png?v=0",
    lorempicsum: "https://api.freelogodesign.org/files/c5b808973b73460896599b6c9c40c50e/thumb/logo_200x200.png?v=0",
    loremip:"https://api.freelogodesign.org/files/42b7fa4a2627435cb96eb3a303367385/thumb/logo_200x200.png?v=637538628350000000",
    comp: "https://api.freelogodesign.org/files/4591144f77974e25aa4c4d34ad333ecc/thumb/logo_200x200.png?v=0",
    fld:"https://api.freelogodesign.org/files/c77c555f182e4df39eb0f17a08524521/thumb/logo_200x200.png?v=0",
    spash: "https://api.freelogodesign.org/files/c19b1943a5544a3c96e4e7c11392c0c6/thumb/logo_200x200.png?v=0",
    google: "https://api.freelogodesign.org/files/0ebe2884cd324aecbe3a431fe3283463/thumb/logo_200x200.png?v=0",
    resizer: "https://api.freelogodesign.org/files/6bdddec8b36a48de83d15b3c0cf58870/thumb/logo_200x200.png?v=0",
    user: "https://api.freelogodesign.org/files/46f5a813d2a748cfa2c0f7bd02b71c0a/thumb/logo_200x200.png?v=0",
    scrum: "https://api.freelogodesign.org/files/0b30d5f52b1d4919881b07ce739c575a/thumb/logo_200x200.png?v=0",
    marmite: "https://api.freelogodesign.org/files/066d43d4f1a34ef1bdf7431d7fdbf639/thumb/logo_200x200.png?v=0",
    work:"https://api.freelogodesign.org/files/d0097fc6f5394bdaa4dddf0ce0ea1aff/thumb/logo_200x200.png?v=0",
    angular: "https://api.freelogodesign.org/files/ba76e555eea14f5580cad58e5c2e4d89/thumb/logo_200x200.png?v=0"
  }


  constructor() { }

  ngOnInit(): void {
  }

 

}