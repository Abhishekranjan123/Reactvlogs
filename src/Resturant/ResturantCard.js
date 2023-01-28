
import './ResturantCard.css'





function ResturantCard(){
    return (
      <div style={{padding:'25px', display: 'inline-block'}}>
        <div class="card"  style={{width: "18rem"}}>
        <img src="https://upload.wikimedia.org/wikipedia/commons/f/f9/Phoenicopterus_ruber_in_S%C3%A3o_Paulo_Zoo.jpg" class="card-img-top" alt="..."></img>
        <div class="card-body">
          <h4 class="card-text" style={{textAlign: "center"}}>Punjabi Hotel</h4>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
      </div>
      </div>
     );
    
}
export default ResturantCard;