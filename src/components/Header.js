import React, { useState } from 'react'
import './Header.css'
// import { NavLink } from 'react-router-dom';

const images = [
  {src:'https://picsum.photos/id/104/3840/2160',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/113/4168/2464',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/106/2592/1728',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/108/2000/1333',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/109/4287/2392',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/114/3264/2448',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/110/5000/3333',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/107/5000/3333',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/111/4400/2656',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/112/4200/2800',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/102/4320/3240',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/102/4320/3240',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/102/4320/3240',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/115/1500/1000',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/102/4320/3240',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/116/3504/2336',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/117/1544/1024',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/102/4320/3240',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/118/1500/1000',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/119/3264/2176',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/128/3823/2549',alt:"BirdsBirds",category:"BirdsBirds"},
  {src:'https://picsum.photos/id/120/4928/3264',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/145/4288/2848',alt:"BirdsBirds",category:"BirdsBirds"},
  {src:'https://picsum.photos/id/121/1600/1067',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/146/5000/3333',alt:"BirdsBirds",category:"BirdsBirds"},
  {src:'https://picsum.photos/id/123/4928/3264',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/151/4288/3216',alt:"BirdsBirds",category:"BirdsBirds"},
  {src:'https://picsum.photos/id/124/3504/2336',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/152/3888/2592',alt:"BirdsBirds",category:"BirdsBirds"},
  {src:'https://picsum.photos/id/125/1500/1000',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/126/4272/2511',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/153/4763/3155',alt:"BirdsBirds",category:"BirdsBirds"},
  {src:'https://picsum.photos/id/127/4032/2272',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/129/4910/3252',alt:"BirdsBirds",category:"BirdsBirds"},
  {src:'https://picsum.photos/id/130/3807/2538',alt:"BirdsBirds",category:"BirdsBirds"},
  {src:'https://picsum.photos/id/103/2592/1936',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/147/2448/2448',alt:"BirdsBirds",category:"BirdsBirds"},
  {src:'https://picsum.photos/id/155/3264/2176',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/149/3454/2288',alt:"BirdsBirds",category:"BirdsBirds"},
  {src:'https://picsum.photos/id/154/3264/2176',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/156/2177/3264',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/122/4147/2756',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/157/5000/3914',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/144/4912/2760',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/134/4928/3264',alt:"Birds",category:"Birds"},
  {src:'https://picsum.photos/id/143/3600/2385',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/158/4836/3224',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/142/4272/2848',alt:"Birds",category:"Birds"},
  {src:'https://picsum.photos/id/137/4752/3168',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/133/2742/1828',alt:"Birds",category:"Birds"},
  {src:'https://picsum.photos/id/160/3200/2119',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/141/2048/1365',alt:"Beaches",category:"Beaches"},
  {src:'https://picsum.photos/id/140/2448/2448',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/131/4698/3166',alt:"Birds",category:"Birds"},
  {src:'https://picsum.photos/id/159/5000/2460',alt:"Mountain",category:"Mountain"},
  {src:'https://picsum.photos/id/139/3465/3008',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/135/2560/1920',alt:"Birds",category:"Birds"},
  {src:'https://picsum.photos/id/136/4032/2272',alt:"Food",category:"Food"},
  {src:'https://picsum.photos/id/132/1600/1066',alt:"Birds",category:"Birds"},
]

const Header = () => {

  const [search,setSearch] = useState('');
  const [category,setCategory] = useState('');

  const imageFilter = images.filter(image=>{
    return image.alt.toLowerCase().includes(search.toLowerCase()) && (category === ""|| image.category === category);
  });

  return (
    <>
    <div className="main_header">
      <h1 className='main_logo'>SanpShot</h1>
      <div>
        <input value={search} className='search_bar' type="text" id="search" onChange={e=>setSearch(e.target.value)}  placeholder='Search..'/> 
        <button className='search_btn'>
          <span  class="material-symbols-outlined">search</span>
        </button>
      </div>
      <nav className='main_navbar'>
      <select className='custom-select' id="category" onChange={e=>setCategory(e.target.value)}>
        <option value="">All</option>
        <option value="Mountain">Mountain</option>
        <option value="Beaches">Beaches</option>
        <option value="Birds">Birds</option>
        <option value="Food">Food</option>
      </select>
      </nav>
    </div>
    <div className='body_container'>
      <div>
        <h1>{category +" Pictures"}</h1>
      </div>
      {imageFilter.map((photo,index)=>(
        <img className='images' key={index} src={photo.src} alt={photo.alt} />
      ))}
    </div>
    </>
  );
}

export default Header