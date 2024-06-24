import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Districts } from '../../model/districts.interface';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  districtList:Districts[] = [
    {
      "id": 1,
      "title": "Thiruvananthapuram",
      "description": "Thiruvananthapuram is the capital city of Kerala, known for its historic landmarks and cultural heritage.",
      "image_url": "images/img1/thekkekudi_cave_temple.jpg"
    },
    {
      "id": 2,
      "title": "Kollam",
      "description": "Kollam, also known as Quilon, is famous for its picturesque landscapes and historic seaport.",
      "image_url": "images/img1/kalamandalam2.jpg"
    },
    {
      "id": 3,
      "title": "Alappuzha",
      "description": "Alappuzha, known as the Venice of the East, is famous for its backwaters, houseboats, and beaches.",
      "image_url": "images/img1/kunhimangalam2.jpg"
    },
    {
      "id": 4,
      "title": "Pathanamthitta",
      "description": "Pathanamthitta is known for its natural beauty, pilgrimage sites, and dense forests.",
      "image_url": "images/img1/thekkekudi_cave_temple.jpg"
    },
    {
      "id": 5,
      "title": "Kottayam",
      "description": "Kottayam is famous for its scenic beauty, cultural heritage, and rubber plantations.",
      "image_url": "images/img1/Kuthampully.jpg"
    },
    {
      "id": 6,
      "title": "Idukki",
      "description": "Idukki is known for its hill stations, wildlife sanctuaries, and spice plantations.",
      "image_url": "images/img1/thekkekudi_cave_temple.jpg"
    },
    {
      "id": 7,
      "title": "Ernakulam",
      "description": "Ernakulam, also known as Kochi, is the commercial capital of Kerala with a blend of modernity and tradition.",
      "image_url": "images/img1/thekkekudi_cave_temple.jpg"
    },
    {
      "id": 8,
      "title": "Thrissur",
      "description": "Thrissur is known as the cultural capital of Kerala, famous for its temples, festivals, and art forms.",
      "image_url": "images/img1/MANNANAM-.jpg"
    },
    {
      "id": 9,
      "title": "Palakkad",
      "description": "Palakkad is known for its picturesque landscapes, historic forts, and lush green paddy fields.",
      "image_url": "images/img1/thekkekudi_cave_temple.jpg"
    },
    {
      "id": 10,
      "title": "Malappuram",
      "description": "Malappuram is known for its rich cultural heritage, mosques, and scenic beauty.",
      "image_url": "images/img1/MANNANAM-.jpg"
    },
    {
      "id": 11,
      "title": "Kozhikode",
      "description": "Kozhikode, also known as Calicut, is famous for its historic sites, beaches, and authentic Malabar cuisine.",
      "image_url": "images/img1/MANNANAM-.jpg"
    },
    {
      "id": 12,
      "title": "Wayanad",
      "description": "Wayanad is known for its lush greenery, wildlife sanctuaries, and spice plantations.",
      "image_url": "images/img1/vyloppilli-samakrithi-bhavan2.jpg"
    },
    {
      "id": 13,
      "title": "Kannur",
      "description": "Kannur is famous for its pristine beaches, historic forts, and traditional art forms like Theyyam.",
      "image_url": "images/img1/MANNANAM-.jpg"
    },
    {
      "id": 14,
      "title": "Kasaragod",
      "description": "Kasaragod is known for its unique culture, historic forts, and scenic beauty.",
      "image_url": "images/img1/vyloppilli-samakrithi-bhavan2.jpg"
    }
  ]

  images0 : any = [
    { id : 1, src : "images/img0/Theyyam.jpg"},
    { id : 2, src : "images/img0/Kerala_Cuisine.jpg"},
    { id : 3, src : "images/img0/rt.jpg"},
    { id : 4, src : "images/img0/ecotourism.jpg"},
    { id : 5, src : "images/img0/Theyyam.jpg"},
    { id : 6, src : "images/img0/Kerala_Cuisine.jpg"},
    { id : 7, src : "images/img0/rt.jpg"},
    { id : 8, src : "images/img0/ecotourism.jpg"},
  ]

  images1 : any = [
    {id : 1, src : "images/img1/kalamandalam2.jpg"},
    {id : 2, src : "images/img1/kunhimangalam2.jpg"},
    {id : 3, src : "images/img1/Kuthampully.jpg"},
    {id : 4, src : "images/img1/MANNANAM-.jpg"},
    {id : 5, src : "images/img1/mannar.jpg"},
    {id : 6, src : "images/img1/museum_of_kerala_history1.jpg"},
    {id : 7, src : "images/img1/vyloppilli-samakrithi-bhavan2.jpg"},
    {id : 8, src : "images/img1/MANNANAM-.jpg"},
  ]

  ngOnInit(){
    console.log("This is Home")
    console.log(this.districtList[1])
    console.log("This is Home Ended")
  }
  
  setLSDistrictId(id:number){
    localStorage.setItem('districtId', JSON.stringify(id));
  }
}
