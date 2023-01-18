import img from '../../images/surface--ZFvSWK4L28-unsplash.jpg'
import './about.css'
const About=()=>{
    return (
        <div>
            <div className="container">
                <div className="row mt-5">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                      <h1 className='landing_page_h1'>Landing Page Template That work hard for you</h1>
                      <p className='landing_page_p'>Test out your products, messaging, and ideas before you launch, 
                        so you can find your future customers, optimize your conversion rates, 
                        and get people excited about your brand.</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                       <img className='women_img' src={img} width="560px"/>
                      
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;