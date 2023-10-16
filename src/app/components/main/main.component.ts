import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  preco: number = 40.00
  imgBackground: string = "https://cdn1.epicgames.com/offer/3ddd6a590da64e3686042d108968a6b2/EGS_GodofWar_SantaMonicaStudio_S2_1200x1600-fbdf3cbc2980749091d52751ffabb7b7_1200x1600-fbdf3cbc2980749091d52751ffabb7b7"
  consoleSuportados:string = "PS4"
  nameGame:string = "God Of War"
  platforme: string = "Digital"

  imgBackground2: string = 'https://cdn.awsli.com.br/600x450/1313/1313910/produto/226784103/fifa24-fc24-mq3sbp1swh.jpg'
  imgBackground3: string = 'https://upload.wikimedia.org/wikipedia/pt/b/be/The_Last_of_Us_capa.png'
}
