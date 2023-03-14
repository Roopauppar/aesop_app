import React from 'react'
import { Link } from 'react-router-dom'
import "./footer.css"

const Footer = () => {
  return (
    <div>
    <section className='footer_bg mt-5'>
   
    <div className='row'>
        <div className='col-lg-5 ps-5'>
        <label for="exampleInputEmail1" class="form-label text-white">Email Address</label>
    <input type="email" class="form-control fw-bold email-text " id="exampleInputEmail1" aria-describedby="emailHelp" placeholder=''/>
    <div className='d-flex mt-3'>
    <div >
    <input class="form-check-input mx-2 " type="checkbox" value="" id="flexCheckDefault"/>
  <label class="form-check-label" for="flexCheckDefault"/>
    </div>
    <div>
    <p>Subscribe to receive communications from Aesop about our products and services. By subscribing, you confirm you have read and accept our privacy policy </p>
    </div>
    </div>
        </div>
        <div className='col-lg-2'>
            <h5>Orders and support</h5>
            <ul>
                <li><Link className='footer_links'>Contact  us</Link></li>
                <li><Link className='footer_links'>FAQs</Link>  </li>
                <li><Link className='footer_links'>Shipping</Link>  </li>
                <li><Link className='footer_links'>Returns</Link>  </li>
                <li><Link className='footer_links'>Order history</Link></li>
                <li><Link className='footer_links'>Terms and conditions</Link></li>
            </ul>
        </div>
        <div className='col-lg-2'>
            <h5>Services</h5>
            <ul>
                <li><Link className='footer_links'>Live assistance </Link></li>
                <li><Link className='footer_links'>Corporate gifts </Link> </li>
                <li><Link className='footer_links'>Facial appointments </Link> </li>
                <li><Link className='footer_links'>Click and Collect</Link> </li>
                <li><Link className='footer_links'>Video consultation </Link></li>
            </ul>
        </div>
        <div className='col-lg-3'>
            <h5>Location preferences</h5>
            <ul>
                <li>Shipping:</li>
                <li><Link className='footer_links'>Hong Kong SAR, China</Link></li>
                <li>Language: </li>
                <li><Link className='footer_links'>English</Link>  </li>
                <li>繁體中文</li>
                <li>简体中文</li>
            </ul>
        </div>
      </div>
   
   <div className='row'>
   <div className='col-lg-5 ps-5'>
   <h5>Sustainability</h5>
   <p>All Aesop products are vegan, and we do not test our formulations or ingredients on animals. We are Leaping Bunny approved and a Certified B Corporation. Learn more</p>
        </div>
        <div className='col-lg-2'>
            <h5>About</h5>
            <ul>
                <li><Link className='footer_links'>Our story</Link> </li>
                <li><Link className='footer_links'>Foundation</Link> </li>
                <li><Link className='footer_links'>Careers</Link> </li>
                <li><Link className='footer_links'>Privacy policy</Link> </li>
                <li><Link className='footer_links'>Accessibility</Link></li>
                <li><Link className='footer_links'>Cookie Policy</Link></li>
            </ul>
        </div>
        <div className='col-lg-2'>
            <h5>Social media</h5>
            <ul>
                <li><Link className='footer_links'>Instagram</Link> </li>
                <li><Link className='footer_links'>Twitter</Link>  </li>
                <li><Link className='footer_links'>LinkedIn</Link>  </li>
                <li><Link className='footer_links'>WeChat</Link> </li>
                <li><Link className='footer_links'>Weibo</Link> </li>
            </ul>
        </div>
        <div className='col-lg-3'>
        </div>
        
      </div>
   
   <div className='footer_down'>

   </div>
   <h6 className='text-white px-5 py-4'>© Aesop</h6>

    
    
    </section>
    </div>  
  )
}

export default Footer
