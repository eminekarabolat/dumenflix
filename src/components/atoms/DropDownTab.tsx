import React from "react";
import './DropDownTab.css';
interface IDropDownProps{
    text: string
}
function DropDownTab(props: IDropDownProps) {
    const {text} = props;
    const genres=['Aksiyon', 'Drama', 'Komedi', 'Gerilim', 'Bilim Kurgu', 'Korku', 'Macera', 'Fantastik', 'Romantik', 'Animasyon', 'Belgesel', 'Gizem']
  return (
    
      <div className="dropdown dumen-header-tab-item col d-grid p-0 ">
  <button className="  dropdown-toggle dumen-header-tab" type="button" data-bs-toggle="dropdown" aria-expanded="false" >
    {text}
  </button>
  <ul className="dropdown-menu dropdown-elements">
    {
      genres.map((genre,index)=>{
       return <li  key={index}><a  style={{color:'white'}} className="dropdown-item dropdown-element" href="#">{genre}</a></li>
      })
    }
    
    
  </ul>
</div>
    
    
  );
}

export default DropDownTab;
