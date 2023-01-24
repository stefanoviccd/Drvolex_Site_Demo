import React, {useState, useEffect} from 'react';
import Divider from '../divider/Divider';
import Fancybox from '../Fancybox';
import "./photosPage.css";

function PhotosPage({photos, alt, page}) {
  var [this_page, setPage]=useState(page);
  var [prev, setPre]=useState("<");
  var [next, setNext]=useState(">");
function handlePrev(e){
e.preventDefault();
setPage(Math.max(this_page-1, 1));
console.log(this_page);
}

function handleNext(e){
  e.preventDefault();
  setPage(Math.min(this_page+1, Math.ceil(photos.length/12)));
  
}
function checkPage(){
  if(Math.ceil(photos.length/12)+1< this_page){
    setPage(1)
  }
}
checkPage();

  return  <div className='fancybox'>
    <Divider></Divider>
    <ul className="pagination">
    <li className="page-item">
              <a href="#" className='page-link' onClick={(e)=>handlePrev(e)}>
                {prev}
              </a>
          </li>
          <li className="page-item">
              <a href="#" className='page-link' onClick={(e)=>handleNext(e)}>
                {next}
              </a>
          </li>
     
  </ul>
  
    <div className="container">
<Fancybox className="fancybox">
{
photos.slice((this_page-1)*12, (this_page-1)*12+12).map(img=>(
        <div className="item"><a  data-fancybox="gallery" href={img.name} ><img src={img.name} alt={alt} className="gallery-image"></img></a></div>

      ))}
     
  </Fancybox>
 
</div>

</div>;
  
}

export default PhotosPage