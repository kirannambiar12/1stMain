import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  openNav = function() {
    var x = document.getElementById("openbtnhide");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    
    var y = document.getElementById("MenuHide");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
      document.getElementById("mySidenav").style.width = "400px";
    }
    
  closeNav = function() {
      document.getElementById("mySidenav").style.width = "50px";
      
      var x = document.getElementById("openbtnhide");
      if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
   
    var y = document.getElementById("MenuHide");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    }


    artfunction = function(){
      document.getElementById("mySidenav").style.width = "50px";
      var x = document.getElementById("openbtnhide");
      if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
   
    var y = document.getElementById("MenuHide");
    if (y.style.display === "none") {
      y.style.display = "block";
    } else {
      y.style.display = "none";
    }
    }

  constructor() { }

  ngOnInit() {
  }

}
