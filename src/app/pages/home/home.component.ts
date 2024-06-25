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

  // districtList:Districts[] = [
  //   {
  //     "id": 1,
  //     "title": "Thiruvananthapuram",
  //     "description": "Thiruvananthapuram is the capital city of Kerala, known for its historic landmarks and cultural heritage.",
  //     "image_url": "images/img1/thekkekudi_cave_temple.jpg"
  //   },
  //   {
  //     "id": 2,
  //     "title": "Kollam",
  //     "description": "Kollam, also known as Quilon, is famous for its picturesque landscapes and historic seaport.",
  //     "image_url": "images/img1/kalamandalam2.jpg"
  //   },
  //   {
  //     "id": 3,
  //     "title": "Alappuzha",
  //     "description": "Alappuzha, known as the Venice of the East, is famous for its backwaters, houseboats, and beaches.",
  //     "image_url": "images/img1/kunhimangalam2.jpg"
  //   },
  //   {
  //     "id": 4,
  //     "title": "Pathanamthitta",
  //     "description": "Pathanamthitta is known for its natural beauty, pilgrimage sites, and dense forests.",
  //     "image_url": "images/img1/thekkekudi_cave_temple.jpg"
  //   },
  //   {
  //     "id": 5,
  //     "title": "Kottayam",
  //     "description": "Kottayam is famous for its scenic beauty, cultural heritage, and rubber plantations.",
  //     "image_url": "images/img1/Kuthampully.jpg"
  //   },
  //   {
  //     "id": 6,
  //     "title": "Idukki",
  //     "description": "Idukki is known for its hill stations, wildlife sanctuaries, and spice plantations.",
  //     "image_url": "images/img1/thekkekudi_cave_temple.jpg"
  //   },
  //   {
  //     "id": 7,
  //     "title": "Ernakulam",
  //     "description": "Ernakulam, also known as Kochi, is the commercial capital of Kerala with a blend of modernity and tradition.",
  //     "image_url": "images/img1/thekkekudi_cave_temple.jpg"
  //   },
  //   {
  //     "id": 8,
  //     "title": "Thrissur",
  //     "description": "Thrissur is known as the cultural capital of Kerala, famous for its temples, festivals, and art forms.",
  //     "image_url": "images/img1/MANNANAM-.jpg"
  //   },
  //   {
  //     "id": 9,
  //     "title": "Palakkad",
  //     "description": "Palakkad is known for its picturesque landscapes, historic forts, and lush green paddy fields.",
  //     "image_url": "images/img1/thekkekudi_cave_temple.jpg"
  //   },
  //   {
  //     "id": 10,
  //     "title": "Malappuram",
  //     "description": "Malappuram is known for its rich cultural heritage, mosques, and scenic beauty.",
  //     "image_url": "images/img1/MANNANAM-.jpg"
  //   },
  //   {
  //     "id": 11,
  //     "title": "Kozhikode",
  //     "description": "Kozhikode, also known as Calicut, is famous for its historic sites, beaches, and authentic Malabar cuisine.",
  //     "image_url": "images/img1/MANNANAM-.jpg"
  //   },
  //   {
  //     "id": 12,
  //     "title": "Wayanad",
  //     "description": "Wayanad is known for its lush greenery, wildlife sanctuaries, and spice plantations.",
  //     "image_url": "images/img1/vyloppilli-samakrithi-bhavan2.jpg"
  //   },
  //   {
  //     "id": 13,
  //     "title": "Kannur",
  //     "description": "Kannur is famous for its pristine beaches, historic forts, and traditional art forms like Theyyam.",
  //     "image_url": "images/img1/MANNANAM-.jpg"
  //   },
  //   {
  //     "id": 14,
  //     "title": "Kasaragod",
  //     "description": "Kasaragod is known for its unique culture, historic forts, and scenic beauty.",
  //     "image_url": "images/img1/vyloppilli-samakrithi-bhavan2.jpg"
  //   }
  // ]

  districtList: Districts[] = [
    {
      id: 1,
      title: 'Thiruvananthapuram',
      description: 'Thiruvananthapuram is the capital city of Kerala, known for its historic landmarks and cultural heritage.',
      image_url: 'images/img1/thekkekudi_cave_temple.jpg',
      tourist_places: [
        { 
          name: 'Sree Padmanabhaswamy Temple',
          description: 'A famous Hindu temple dedicated to Lord Vishnu, known for its architectural beauty and treasures.',
          image_url: 'images/thiruvananthapuram/sree-padmanabhaswamy-temple.jpg'
        },
        {
          name: 'Napier Museum',
          description: 'An art and natural history museum known for its collection of artifacts and exhibits.',
          image_url: 'images/thiruvananthapuram/napier-museum.jpg'
        },
        {
          name: 'Kovalam Beach',
          description: 'A popular beach known for its golden sands and clear waters, ideal for swimming and sunbathing.',
          image_url: 'images/thiruvananthapuram/kovalam-beach.jpg'
        },
        {
          name: 'Shankumugham Beach',
          description: 'A serene beach where one can relax and enjoy beautiful sunsets and kite flying.',
          image_url: 'images/thiruvananthapuram/shankumugham-beach.jpg'
        },
        {
          name: 'Agastya Mala Peak',
          description: 'A trekking destination offering panoramic views of Western Ghats and surrounding valleys.',
          image_url: 'images/thiruvananthapuram/agastya-mala-peak.jpg'
        }
      ]
    },
    {
      id: 2,
      title: 'Kollam',
      description: 'Kollam, also known as Quilon, is famous for its picturesque landscapes and historic seaport.',
      image_url: 'images/img1/kalamandalam2.jpg',
      tourist_places: [
        {
          name: 'Ashtamudi Lake',
          description: 'A beautiful backwater lake known for its scenic beauty and boat rides.',
          image_url: 'images/kollam/ashtamudi-lake.jpg'
        },
        {
          name: 'Thangassery Beach',
          description: 'A serene beach with historical significance and picturesque views.',
          image_url: 'images/kollam/thangassery-beach.jpg'
        },
        {
          name: 'Sardar Vallabhbhai Patel Police Museum',
          description: 'A museum showcasing the history of Kerala Police and its role in maintaining law and order.',
          image_url: 'images/kollam/police-museum.jpg'
        },
        {
          name: 'Jatayu Earth\'s Center',
          description: 'A unique eco-tourism destination featuring the world’s largest bird sculpture atop a hill.',
          image_url: 'images/kollam/jatayu-earths-center.jpg'
        },
        {
          name: 'Palaruvi Waterfalls',
          description: 'A majestic waterfall surrounded by dense forests, offering a refreshing experience.',
          image_url: 'images/kollam/palaruvi-waterfalls.jpg'
        }
      ]
    },
    {
      id: 3,
      title: 'Alappuzha',
      description: 'Alappuzha, known as the Venice of the East, is famous for its backwaters, houseboats, and beaches.',
      image_url: 'images/img1/kunhimangalam2.jpg',
      tourist_places: [
        {
          name: 'Alappuzha Beach',
          description: 'A beautiful beach with a historic pier, offering stunning sunset views and boat rides.',
          image_url: 'images/alappuzha/alappuzha-beach.jpg'
        },
        {
          name: 'Kuttanad',
          description: 'A region known as the rice bowl of Kerala, with scenic backwaters and traditional houseboat cruises.',
          image_url: 'images/alappuzha/kuttanad.jpg'
        },
        {
          name: 'Pathiramanal Island',
          description: 'A serene island in Vembanad Lake, known for its lush greenery and bird-watching opportunities.',
          image_url: 'images/alappuzha/pathiramanal-island.jpg'
        },
        {
          name: 'Ambalappuzha Sri Krishna Temple',
          description: 'An ancient temple famous for its architecture and the traditional sweet dish called "palpayasam."',
          image_url: 'images/alappuzha/ambalappuzha-temple.jpg'
        },
        {
          name: 'Nehru Trophy Boat Race',
          description: 'An annual snake boat race held in Punnamada Lake, attracting visitors from around the world.',
          image_url: 'images/alappuzha/nehru-trophy-boat-race.jpg'
        }
      ]
    },
    {
      id: 4,
      title: 'Pathanamthitta',
      description: 'Pathanamthitta is known for its natural beauty, pilgrimage sites, and dense forests.',
      image_url: 'images/img1/thekkekudi_cave_temple.jpg',
      tourist_places: [
        {
          name: 'Sabarimala Temple',
          description: 'A famous pilgrimage center dedicated to Lord Ayyappa, attracting millions of devotees annually.',
          image_url: 'images/pathanamthitta/sabarimala-temple.jpg'
        },
        {
          name: 'Perunthenaruvi Waterfall',
          description: 'A stunning waterfall cascading down rocky cliffs, ideal for trekking and picnicking.',
          image_url: 'images/pathanamthitta/perunthenaruvi-waterfall.jpg'
        },
        {
          name: 'Konni Elephant Training Center',
          description: 'A center where elephants are trained and cared for, offering elephant rides and cultural shows.',
          image_url: 'images/pathanamthitta/konni-elephant-training-center.jpg'
        },
        {
          name: 'Aranmula Parthasarathy Temple',
          description: 'An ancient temple known for its grand festivals and the annual Aranmula Boat Race.',
          image_url: 'images/pathanamthitta/aranmula-temple.jpg'
        },
        {
          name: 'Kaviyoor Rock Cut Temple',
          description: 'An ancient rock-cut cave temple dedicated to Lord Shiva, known for its architectural beauty.',
          image_url: 'images/pathanamthitta/kaviyoor-temple.jpg'
        }
      ]
    },
    {
      id: 5,
      title: 'Kottayam',
      description: 'Kottayam is famous for its scenic beauty, cultural heritage, and rubber plantations.',
      image_url: 'images/img1/Kuthampully.jpg',
      tourist_places: [
        {
          name: 'Kumarakom Bird Sanctuary',
          description: 'A haven for migratory birds, offering boat cruises amidst serene backwaters.',
          image_url: 'images/kottayam/kumarakom-bird-sanctuary.jpg'
        },
        {
          name: 'Ettumanoor Mahadeva Temple',
          description: 'An ancient Hindu temple known for its beautiful architecture and murals.',
          image_url: 'images/kottayam/ettumanoor-temple.jpg'
        },
        {
          name: 'Vaikom Mahadeva Temple',
          description: 'One of the oldest temples in Kerala dedicated to Lord Shiva, known for its historical significance.',
          image_url: 'images/kottayam/vaikom-temple.jpg'
        },
        {
          name: 'Thirunakkara Mahadeva Temple',
          description: 'An ancient temple known for its annual festival featuring traditional art forms and cultural events.',
          image_url: 'images/kottayam/thirunakkara-temple.jpg'
        },
        {
          name: 'Marmala Waterfall',
          description: 'A scenic waterfall surrounded by lush greenery, offering a refreshing natural experience.',
          image_url: 'images/kottayam/marmala-waterfall.jpg'
        }
      ]
    },
    {
      id: 6,
      title: 'Idukki',
      description: 'Idukki is known for its hill stations, wildlife sanctuaries, and spice plantations.',
      image_url: 'images/img1/thekkekudi_cave_temple.jpg',
      tourist_places: [
        {
          name: 'Munnar',
          description: 'A popular hill station known for its sprawling tea gardens, misty valleys, and pleasant climate.',
          image_url: 'images/idukki/munnar.jpg'
        },
        {
          name: 'Periyar Wildlife Sanctuary',
          description: 'A renowned wildlife sanctuary offering boat safaris amidst lush greenery and diverse wildlife.',
          image_url: 'images/idukki/periyar-wildlife-sanctuary.jpg'
        },
        {
          name: 'Idukki Arch Dam',
          description: 'One of the highest arch dams in Asia, offering scenic views and a picturesque setting.',
          image_url: 'images/idukki/idukki-dam.jpg'
        },
        {
          name: 'Kalvari Mount',
          description: 'A scenic viewpoint offering panoramic views of Idukki Dam and the surrounding landscape.',
          image_url: 'images/idukki/kalvari-mount.jpg'
        },
        {
          name: 'Anamudi Peak',
          description: 'The highest peak in South India, offering trekking opportunities and breathtaking views.',
          image_url: 'images/idukki/anamudi-peak.jpg'
        }
      ]
    },
    {
      id: 7,
      title: 'Ernakulam',
      description: 'Ernakulam, also known as Kochi, is the commercial capital of Kerala with a blend of modernity and tradition.',
      image_url: 'images/img1/thekkekudi_cave_temple.jpg',
      tourist_places: [
        {
          name: 'Fort Kochi',
          description: 'A historic area known for its colonial buildings, Chinese fishing nets, and art galleries.',
          image_url: 'images/ernakulam/fort-kochi.jpg'
        },
        {
          name: 'Mattancherry Palace',
          description: 'A Portuguese palace known for its murals depicting Hindu mythology, also called the Dutch Palace.',
          image_url: 'images/ernakulam/mattancherry-palace.jpg'
        },
        {
          name: 'Marine Drive',
          description: 'A picturesque promenade along the backwaters of Kochi, ideal for leisurely walks and boat rides.',
          image_url: 'images/ernakulam/marine-drive.jpg'
        },
        {
          name: 'Jewish Synagogue',
          description: 'The oldest active synagogue in the Commonwealth of Nations, known for its beautiful interiors.',
          image_url: 'images/ernakulam/jewish-synagogue.jpg'
        },
        {
          name: 'Cherai Beach',
          description: 'A serene beach known for its golden sands, shallow waters, and dolphin sightings.',
          image_url: 'images/ernakulam/cherai-beach.jpg'
        }
      ]
    },
    {
      id: 8,
      title: 'Thrissur',
      description: 'Thrissur is known as the cultural capital of Kerala, famous for its temples, festivals, and art forms.',
      image_url: 'images/img1/MANNANAM-.jpg',
      tourist_places: [
        {
          name: 'Vadakkunnathan Temple',
          description: 'An ancient Shiva temple with traditional Kerala architecture and an annual Thrissur Pooram festival.',
          image_url: 'images/thrissur/vadakkunnathan-temple.jpg'
        },
        {
          name: 'Guruvayur Temple',
          description: 'A famous Krishna temple known for its spiritual significance and large number of devotees.',
          image_url: 'images/thrissur/guruvayur-temple.jpg'
        },
        {
          name: 'Athirapally Waterfalls',
          description: 'A majestic waterfall amidst lush green forests, often called the "Niagara of India."',
          image_url: 'images/thrissur/athirapally-waterfalls.jpg'
        },
        {
          name: 'Peechi Dam',
          description: 'A scenic dam site offering boating facilities amidst a picturesque landscape.',
          image_url: 'images/thrissur/peechi-dam.jpg'
        },
        {
          name: 'Koodalmanikyam Temple',
          description: 'One of the oldest temples in Kerala dedicated to Lord Bharata (also known as Koodalmanikyam).',
          image_url: 'images/thrissur/koodalmanikyam-temple.jpg'
        }
      ]
    },
    {
      id: 9,
      title: 'Palakkad',
      description: 'Palakkad is known for its picturesque landscapes, historic forts, and lush green paddy fields.',
      image_url: 'images/img1/thekkekudi_cave_temple.jpg',
      tourist_places: [
        {
          name: 'Palakkad Fort',
          description: 'A historic fort with massive walls, cannons, and a Hanuman temple inside.',
          image_url: 'images/palakkad/palakkad-fort.jpg'
        },
        {
          name: 'Malampuzha Dam and Gardens',
          description: 'A dam with beautifully landscaped gardens, boat rides, and amusement park facilities.',
          image_url: 'images/palakkad/malampuzha-dam.jpg'
        },
        {
          name: 'Parambikulam Tiger Reserve',
          description: 'A biodiversity hotspot known for its rich flora, fauna, and eco-tourism activities.',
          image_url: 'images/palakkad/parambikulam-tiger-reserve.jpg'
        },
        {
          name: 'Nelliyampathy Hills',
          description: 'A hill station offering stunning views, trekking trails, and plantation walks.',
          image_url: 'images/palakkad/nelliyampathy-hills.jpg'
        },
        {
          name: 'Dhoni Waterfalls',
          description: 'A cascading waterfall nestled amidst lush greenery, ideal for nature lovers and photographers.',
          image_url: 'images/palakkad/dhoni-waterfalls.jpg'
        }
      ]
    },
    {
      id: 10,
      title: 'Malappuram',
      description: 'Malappuram is known for its rich cultural heritage, mosques, and scenic beauty.',
      image_url: 'images/img1/MANNANAM-.jpg',
      tourist_places: [
        {
          name: 'Kottakkunnu',
          description: 'A historical park with a fort, children’s park, and an open-air auditorium.',
          image_url: 'images/malappuram/kottakkunnu.jpg'
        },
        {
          name: 'Adyanpara Waterfalls',
          description: 'A picturesque waterfall cascading down rocky cliffs amidst dense forests.',
          image_url: 'images/malappuram/adyanpara-waterfalls.jpg'
        },
        {
          name: 'Kadalundi Bird Sanctuary',
          description: 'A sanctuary known for its migratory birds, especially during the winter season.',
          image_url: 'images/malappuram/kadalundi-bird-sanctuary.jpg'
        },
        {
          name: 'Pazhayangadi Mosque',
          description: 'An ancient mosque known for its architectural style and religious significance.',
          image_url: 'images/malappuram/pazhayangadi-mosque.jpg'
        },
        {
          name: 'Nilambur Teak Museum',
          description: 'A museum showcasing the history and importance of teak wood in Kerala.',
          image_url: 'images/malappuram/nilambur-teak-museum.jpg'
        }
      ]
    },
    {
      id: 11,
      title: 'Kozhikode',
      description: 'Kozhikode, also known as Calicut, is famous for its historic sites, beaches, and authentic Malabar cuisine.',
      image_url: 'images/img1/MANNANAM-.jpg',
      tourist_places: [
        {
          name: 'Kappad Beach',
          description: 'A historic beach where Vasco da Gama first set foot in India, marked by a monument.',
          image_url: 'images/kozhikode/kappad-beach.jpg'
        },
        {
          name: 'Kozhikode Beach',
          description: 'A bustling beach with a lighthouse, aquarium, and sunset views over the Arabian Sea.',
          image_url: 'images/kozhikode/kozhikode-beach.jpg'
        },
        {
          name: 'Beypore Beach',
          description: 'A scenic beach known for its fishing harbor and traditional shipbuilding industry.',
          image_url: 'images/kozhikode/beypore-beach.jpg'
        },
        {
          name: 'Thusharagiri Waterfalls',
          description: 'A series of cascading waterfalls amidst lush forests, offering trekking and camping opportunities.',
          image_url: 'images/kozhikode/thusharagiri-waterfalls.jpg'
        },
        {
          name: 'Mishkal Mosque',
          description: 'An ancient mosque known for its unique architecture and religious significance.',
          image_url: 'images/kozhikode/mishkal-mosque.jpg'
        }
      ]
    },
    {
      id: 12,
      title: 'Wayanad',
      description: 'Wayanad is known for its lush greenery, wildlife sanctuaries, and spice plantations.',
      image_url: 'images/img1/vyloppilli-samakrithi-bhavan2.jpg',
      tourist_places: [
        {
          name: 'Chembra Peak',
          description: 'A scenic peak with a heart-shaped lake, popular among trekkers and nature lovers.',
          image_url: 'images/wayanad/chembra-peak.jpg'
        },
        {
          name: 'Edakkal Caves',
          description: 'Ancient caves with petroglyphs dating back to the Neolithic age, offering historical insights.',
          image_url: 'images/wayanad/edakkal-caves.jpg'
        },
        {
          name: 'Soochipara Waterfalls',
          description: 'A picturesque waterfall amidst dense forests, ideal for trekking and nature photography.',
          image_url: 'images/wayanad/soochipara-waterfalls.jpg'
        },
        {
          name: 'Banasura Sagar Dam',
          description: 'The largest earthen dam in India, offering boating and trekking opportunities amidst scenic landscapes.',
          image_url: 'images/wayanad/banasura-sagar-dam.jpg'
        },
        {
          name: 'Pookode Lake',
          description: 'A natural freshwater lake surrounded by forests, ideal for boating and picnicking.',
          image_url: 'images/wayanad/pookode-lake.jpg'
        }
      ]
    },
    {
      id: 13,
      title: 'Kannur',
      description: 'Kannur is famous for its pristine beaches, historic forts, and traditional art forms like Theyyam.',
      image_url: 'images/img1/MANNANAM-.jpg',
      tourist_places: [
        {
          name: 'St. Angelo Fort',
          description: 'A historic fort overlooking the Arabian Sea, offering panoramic views and a glimpse into history.',
          image_url: 'images/kannur/st-angelo-fort.jpg'
        },
        {
          name: 'Payyambalam Beach',
          description: 'A scenic beach with golden sands and serene atmosphere, ideal for relaxation and sunset views.',
          image_url: 'images/kannur/payyambalam-beach.jpg'
        },
        {
          name: 'Muzhappilangad Drive-in Beach',
          description: 'The only drive-in beach in Kerala, known for its long stretch of sandy shores and thrilling drives.',
          image_url: 'images/kannur/muzhappilangad-drive-in-beach.jpg'
        },
        {
          name: 'Thalassery Fort',
          description: 'A historical fort built by the British, offering insights into colonial architecture and strategic planning.',
          image_url: 'images/kannur/thalassery-fort.jpg'
        },
        {
          name: 'Arakkal Museum',
          description: 'A museum showcasing the history and artifacts of the Arakkal family, the only Muslim royal family in Kerala.',
          image_url: 'images/kannur/arakkal-museum.jpg'
        }
      ]
    },
    {
      id: 14,
      title: 'Kasaragod',
      description: 'Kasaragod is known for its unique culture, historic forts, and scenic beauty.',
      image_url: 'images/img1/vyloppilli-samakrithi-bhavan2.jpg',
      tourist_places: [
        {
          name: 'Bekal Fort',
          description: 'A historic fort overlooking the Arabian Sea, known for its strategic location and picturesque views.',
          image_url: 'images/kasaragod/bekal-fort.jpg'
        },
        {
          name: 'Chandragiri Fort',
          description: 'A historical fort built by the Vijayanagara Empire, offering panoramic views of the Chandragiri River.',
          image_url: 'images/kasaragod/chandragiri-fort.jpg'
        },
        {
          name: 'Ananthapura Lake Temple',
          description: 'A temple located in the middle of a lake, known for its ancient architecture and religious significance.',
          image_url: 'images/kasaragod/ananthapura-lake-temple.jpg'
        },
        {
          name: 'Malik Deenar Mosque',
          description: 'An ancient mosque believed to have been founded by Malik Deenar, offering spiritual solace and architectural beauty.',
          image_url: 'images/kasaragod/malik-deenar-mosque.jpg'
        },
        {
          name: 'Kappil Beach',
          description: 'A serene beach with golden sands and palm-fringed shores, perfect for relaxation and beach activities.',
          image_url: 'images/kasaragod/kappil-beach.jpg'
        }
      ]
    }
  ];

  images0: any[] = [
    { 
      id: 1, 
      src: "images/img0/Theyyam.jpg", 
      title: "Theyyam", 
      description: "Theyyam is a traditional ritualistic dance form of Kerala, India. It incorporates elements of dance, music, and drama." 
    },
    { 
      id: 2, 
      src: "images/img0/Kerala_Cuisine.jpg", 
      title: "Kerala Cuisine", 
      description: "Kerala cuisine is known for its spicy and flavorful dishes, often prepared with coconut and a variety of spices." 
    },
    { 
      id: 3, 
      src: "images/img0/rt.jpg", 
      title: "Rural Tourism", 
      description: "Rural tourism in Kerala offers an opportunity to experience the cultural richness and natural beauty of the countryside." 
    },
    { 
      id: 4, 
      src: "images/img0/ecotourism.jpg", 
      title: "Ecotourism", 
      description: "Ecotourism in Kerala promotes sustainable travel practices and allows visitors to explore the state's diverse ecosystems." 
    },
    { 
      id: 5, 
      src: "images/img0/Theyyam.jpg", 
      title: "Theyyam", 
      description: "Theyyam is a traditional ritualistic dance form of Kerala, India. It incorporates elements of dance, music, and drama." 
    },
    { 
      id: 6, 
      src: "images/img0/Kerala_Cuisine.jpg", 
      title: "Kerala Cuisine", 
      description: "Kerala cuisine is known for its spicy and flavorful dishes, often prepared with coconut and a variety of spices." 
    },
    { 
      id: 7, 
      src: "images/img0/rt.jpg", 
      title: "Rural Tourism", 
      description: "Rural tourism in Kerala offers an opportunity to experience the cultural richness and natural beauty of the countryside." 
    },
    { 
      id: 8, 
      src: "images/img0/ecotourism.jpg", 
      title: "Ecotourism", 
      description: "Ecotourism in Kerala promotes sustainable travel practices and allows visitors to explore the state's diverse ecosystems." 
    },
  ];
  

  images1: any[] = [
    { 
      id: 1, 
      src: "images/img1/kalamandalam2.jpg", 
      title: "Kalamandalam", 
      description: "Kalamandalam is a renowned institution in Kerala dedicated to the preservation and promotion of traditional Indian art forms, particularly Kathakali and Mohiniyattam." 
    },
    { 
      id: 2, 
      src: "images/img1/kunhimangalam2.jpg", 
      title: "Kunhimangalam", 
      description: "Kunhimangalam is a scenic village in Kerala known for its serene environment and traditional agricultural practices." 
    },
    { 
      id: 3, 
      src: "images/img1/Kuthampully.jpg", 
      title: "Kuthampully", 
      description: "Kuthampully is famous for its traditional handloom industry producing Kerala's distinctive Kasavu sarees, known for their elegant golden borders." 
    },
    { 
      id: 4, 
      src: "images/img1/MANNANAM-.jpg", 
      title: "Mannanam", 
      description: "Mannanam is a historical town in Kerala known for its educational institutions and cultural heritage." 
    },
    { 
      id: 5, 
      src: "images/img1/mannar.jpg", 
      title: "Mannar", 
      description: "Mannar is a picturesque village in Kerala surrounded by lush greenery and backwaters, offering a tranquil environment." 
    },
    { 
      id: 6, 
      src: "images/img1/museum_of_kerala_history1.jpg", 
      title: "Museum of Kerala History", 
      description: "The Museum of Kerala History in Kochi showcases the cultural evolution of Kerala through various artifacts and exhibits." 
    },
    { 
      id: 7, 
      src: "images/img1/vyloppilli-samakrithi-bhavan2.jpg", 
      title: "Vyloppilli Samskriti Bhavan", 
      description: "Vyloppilli Samskriti Bhavan is a cultural center in Kerala dedicated to the promotion of literature, arts, and cultural activities." 
    },
    { 
      id: 8, 
      src: "images/img1/MANNANAM-.jpg", 
      title: "Mannanam", 
      description: "Mannanam is a historical town in Kerala known for its educational institutions and cultural heritage." 
    },
  ];
  

  ngOnInit(){
    console.log("This is Home")
    console.log(this.districtList[1])
    console.log("This is Home Ended")
  }
  
  setLSDistrictId(id:number){
    localStorage.setItem('districtId', JSON.stringify(id));
  }
}
