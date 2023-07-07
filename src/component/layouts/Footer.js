import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
    <section className="footer">
  <div className="container-fluid">
    <div className="container">
      <div className="row">
        <h1 className="text-center">iron paradise</h1>
      </div>
        <h4 className="text-center">------------------x-------------------x-------------------x-----------------</h4>
      <div className="row">
        <div className="col-md-3 w">
                <h6>Company</h6>
                  <p>About<br/>
                   Contact<br/>
                   Careers<br/>
                   Team<br/>
                   Press releases<br/>
                   In the media<br/>
                   Testimonials<br/>
                   99nonprofits</p>
        </div>
        <div className="col-md-3 w">
                 <h6>Design services</h6>
                  <p>Design contests<br/>
                   1-to-1 Projects<br/>
                   Find a designer<br/>
                   Discover inspiration<br/>
                   Pricing<br/>
                   99designs Studio<br/>
                   99designs Select<br/>
                   API integrations
                 </p>
        </div>
        <div className="col-md-3 w">
                  <h6>Get a design</h6>
                  <p>Logo design<br/>
                   Business card<br/>
                   Web page design<br/>
                   Brand guide<br/>
                   Packaging design<br/>
                   T-shirt design<br/>
                   Book cover design<br/>
                   Browse all categories
                 </p>
        </div>
        <div className="col-md-3 w">
            <h6>Resources</h6>
            <p>Become a designer<br/>
              Blog<br/>
              Design without borders<br/>
              99awards<br/>
              Affiliates<br/>
              Logo ideas<br/>
              T-shirt ideas<br/>
              Designer resources<br/>
              Featured partners<br/>
              Help
            </p>
            <p className="d-flex pt-3">
          <Link href="#" className="footer_social_media_icon"><i className="fab fa-facebook-f"></i></Link>
          <Link href="#" className="footer_social_media_icon"><i className="fab fa-instagram"></i></Link>
          <Link href="#" className="footer_social_media_icon"><i className="fab fa-linkedin-in"></i></Link>
          <Link href="#" className="footer_social_media_icon"><i className="fab fa-dribbble"></i></Link>
          </p>
        </div>
        <h4 className="text-center">------------------x-------------------x-------------------x-----------------</h4>
      </div>
      <div className="row">
       <h6 className="text-center">© 99designs | by Vista | Terms | Privacy | Sitemap | Englishespañol</h6>
      </div>
    </div>
  </div>
</section>
    </>
  )
}

export default Footer