import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ProjectClimate';
  ceu : string = 'dia';
  day : boolean = false;


  noite(){
    const status = this.ceu
    console.log('está de dia');
    const dia = window.document.getElementById('sky');
    dia?.classList.add('noite');
    dia?.classList.remove('dia');
    const foot = window.document.getElementById('footer');
    foot?.classList.add('footerNoite');
    foot?.classList.remove('footer');
    const sun = window.document.getElementById('bol');
    sun?.classList.add('lune');
    sun?.classList.remove('sun')

    this.ceu = 'noite';
    this.day = false;

  };

  dia(){
    const status = this.ceu
    
    console.log('está de noite');
    const dia = window.document.getElementById('sky');
    dia?.classList.add('dia');
    dia?.classList.remove('noite');
    const foot = window.document.getElementById('footer');
    foot?.classList.add('footer');
    foot?.classList.remove('footerNoite');
    const lune = window.document.getElementById('bol');
    lune?.classList.add('sun');
    lune?.classList.remove('lune')

    this.ceu = 'dia';
    this.day = false;

  }

  nuvens(){
    if(this.ceu === 'dia'){
      this.day = true;
    }
    
    
  }
    

  click(){

  }
}
