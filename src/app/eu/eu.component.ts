import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eu',
  templateUrl: './eu.component.html',
  styleUrls: ['./eu.component.css']
})
export class EuComponent implements OnInit {

  name: string ='Samuel Chacon';
  paisdeorigen: string = 'Venezuela';
  urlimagen: string = 'https://media-exp1.licdn.com/dms/image/C4E03AQFPeKSdCoZukQ/profile-displayphoto-shrink_200_200/0/1559799849883?e=1620864000&v=beta&t=eGwMkujx5fdtpmO1ud9SM9qlBbOsHwxjdVtrVLJCNck';
  descriptor: string = 'Mi foto de perfil de linkedin';
  urlimagen1: string = 'https://logodownload.org/wp-content/uploads/2015/02/burger-king-logo-0-1536x1536.png';
  descriptor1: string = 'Logo de BurgerKing';
  urlimagen2: string = 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/CINE%2B_-_LOGO.png/800px-CINE%2B_-_LOGO.png';
  descriptor2: string = 'Logo de filmes';
  urlimagen3: string = 'https://www.seekpng.com/png/detail/856-8562823_dragon-ball-super-tem-novo-cartaz-divulgado-dragonball.png';
  descriptor3: string = 'Logo de Dragon Ball';
  ciudade: string = 'Caracas';
  idade: number = 37;
  constructor() { }

  ngOnInit(): void {
  }

}
