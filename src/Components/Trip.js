import img from './ladakh.jpg'
import img1 from '../Images/trip2.jpg'
import amsterdam from '../Images/amsterdam.jpg'
import paris from '../Images/paris2.jpg'
import './Trip.css'
import Tripdata from './Tripdata'





const Trip = () => {
    return (
        <>
            <div className="trip">
                <h1>Popular Places to Travel :-</h1>
                <hr />
                <p>We Travel not to escape life, but for life not to escape us...</p>

                <Tripdata className="firstplace" heading="1. Ladakh" title="In northernmost India, this region is large, but it has a
                 low population density and a number of nomadic residents.
                  Breathtaking, pristine scenery is a major draw to the area,
                   but virtually all travelers will also spend time in the town of Leh.
                   Buddhist culture is also prominent in Leh, and you may wish to explore 
                    some of the many Buddhist monasteries and temples in the Old Town!"
                    img={img} />
                <Tripdata className="firstplace-reverse" heading="2. Maldives" title="The Maldives is an archipelago of 1,192 coral islands
             grouped into natural atolls. However, only 200 islands are inhabited. Each resort generally
              occupies an entire atoll.Imagine having a room on a pier jutting out from the shore with a glass floor under which manta rays 
              and reef sharks can be seen swimming, and step out from your overwater bungalow to the view of turquoise water."
                    img={img1} />
                <Tripdata className="secondplace-reverse" heading=" 3. Amsterdam" title="The capital city of Netherlands probably has one of the most 
                      chilled out vibes across all cities of Europe. If you're travelling to Amsterdam, rest assured,
                       it's going to be one of your most wonderful experiences. The city has everything, from a bustling night life,
                        to picnic parks, to some spectacular museums. You're going to find yourself spoilt for choice!"
                    img={amsterdam} />

                <Tripdata className="thirdplace-reverse" heading="4. Paris, France"  title="The capital city of Netherlands probably has one of the most 
                      chilled out vibes across all cities of Europe. If you're travelling to Amsterdam, rest assured,
                       it's going to be one of your most wonderful experiences. The city has everything, from a bustling night life,
                        to picnic parks, to some spectacular museums. You're going to find yourself spoilt for choice!"
                    img={paris} />"



            </div>
        </>
    )
}
export default Trip
