import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import Navbar8 from '../components/navbar8'
import Hero17 from '../components/hero17'
import Features24 from '../components/features24'
import CTA26 from '../components/cta26'
import Features25 from '../components/features25'
import Pricing14 from '../components/pricing14'
import Steps2 from '../components/steps2'
import Testimonial17 from '../components/testimonial17'
import Contact10 from '../components/contact10'
import Footer4 from '../components/footer4'
import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Whopping Able Mandrill</title>
        <meta property="og:title" content="Whopping Able Mandrill" />
      </Helmet>
      <Navbar8
        link1={
          <Fragment>
            <span className="home-text100 thq-link thq-body-small">#home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text101 thq-link thq-body-small">
              #services
            </span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text102 thq-link thq-body-small">#about</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text103 thq-link thq-body-small">
              #contact
            </span>
          </Fragment>
        }
        page1={
          <Fragment>
            <span className="home-text104 thq-body-large">Home</span>
          </Fragment>
        }
        page2={
          <Fragment>
            <span className="home-text105 thq-body-large">Services</span>
          </Fragment>
        }
        page3={
          <Fragment>
            <span className="home-text106 thq-body-large">About Us</span>
          </Fragment>
        }
        page4={
          <Fragment>
            <span className="home-text107 thq-body-large">Contact</span>
          </Fragment>
        }
        action1={
          <Fragment>
            <span className="home-text108">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text109">Contact Us</span>
          </Fragment>
        }
        page1Description={
          <Fragment>
            <span className="home-text110 thq-body-small">
              Learn more about our software agency and what we offer.
            </span>
          </Fragment>
        }
        page2Description={
          <Fragment>
            <span className="home-text111 thq-body-small">
              Explore the range of services we provide to help your business
              succeed.
            </span>
          </Fragment>
        }
        page3Description={
          <Fragment>
            <span className="home-text112 thq-body-small">
              Discover more about our team and our mission.
            </span>
          </Fragment>
        }
        page4Description={
          <Fragment>
            <span className="home-text113 thq-body-small">
              Get in touch with us for inquiries or collaborations.
            </span>
          </Fragment>
        }
      ></Navbar8>
      <Hero17
        action1={
          <Fragment>
            <span className="home-text114 thq-body-small">Get Started</span>
          </Fragment>
        }
        action2={
          <Fragment>
            <span className="home-text115 thq-body-small">Learn More</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text116 thq-body-large">
              We are a team of dedicated professionals ready to bring your
              software ideas to life. Let&apos;s innovate together!
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text117 thq-heading-1">
              Welcome to Our Software Agency
            </span>
          </Fragment>
        }
      ></Hero17>
      <Features24
        feature1Title={
          <Fragment>
            <span className="home-text118 thq-heading-2">Feature 1</span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text119 thq-heading-2">Feature 2</span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text120 thq-heading-2">Feature 3</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text121 thq-body-small">
              Description for feature 1
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text122 thq-body-small">
              Description for feature 2
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text123 thq-body-small">
              Description for feature 3
            </span>
          </Fragment>
        }
      ></Features24>
      <CTA26
        action1={
          <Fragment>
            <span className="home-text124">Get in touch</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text125 thq-body-large">
              Contact us today to discuss how our team can help you achieve your
              goals.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text126 thq-heading-2">
              Ready to take your software to the next level?
            </span>
          </Fragment>
        }
      ></CTA26>
      <Features25
        feature1Title={
          <Fragment>
            <span className="home-text127 thq-heading-2">
              Custom Software Development
            </span>
          </Fragment>
        }
        feature2Title={
          <Fragment>
            <span className="home-text128 thq-heading-2">
              Mobile App Development
            </span>
          </Fragment>
        }
        feature3Title={
          <Fragment>
            <span className="home-text129 thq-heading-2">Web Development</span>
          </Fragment>
        }
        feature1Description={
          <Fragment>
            <span className="home-text130 thq-body-small">
              Tailored software solutions to meet your specific business needs
            </span>
          </Fragment>
        }
        feature2Description={
          <Fragment>
            <span className="home-text131 thq-body-small">
              Create engaging mobile applications for iOS and Android platforms
            </span>
          </Fragment>
        }
        feature3Description={
          <Fragment>
            <span className="home-text132 thq-body-small">
              Build responsive and user-friendly websites for your business
            </span>
          </Fragment>
        }
      ></Features25>
      <Pricing14
        plan1={
          <Fragment>
            <span className="home-text133 thq-body-large">Basic Plan</span>
          </Fragment>
        }
        plan2={
          <Fragment>
            <span className="home-text134 thq-body-large">Standard Plan</span>
          </Fragment>
        }
        plan3={
          <Fragment>
            <span className="home-text135 thq-body-large">Premium Plan</span>
          </Fragment>
        }
        plan11={
          <Fragment>
            <span className="home-text136 thq-body-large">Basic plan</span>
          </Fragment>
        }
        plan21={
          <Fragment>
            <span className="home-text137 thq-body-large">Business plan</span>
          </Fragment>
        }
        plan31={
          <Fragment>
            <span className="home-text138 thq-body-large">Enterprise plan</span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text139 thq-body-small">
              Choose the perfect plan for you
            </span>
          </Fragment>
        }
        content2={
          <Fragment>
            <span className="home-text140 thq-body-large">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
              <span>
                <span
                  dangerouslySetInnerHTML={{
                    __html: ' ',
                  }}
                />
              </span>
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text143 thq-heading-2">Pricing plan</span>
          </Fragment>
        }
        plan1Price={
          <Fragment>
            <span className="home-text144 thq-heading-3">$99/month</span>
          </Fragment>
        }
        plan2Price={
          <Fragment>
            <span className="home-text145 thq-heading-3">$199/month</span>
          </Fragment>
        }
        plan3Price={
          <Fragment>
            <span className="home-text146 thq-heading-3">$299/month</span>
          </Fragment>
        }
        plan1Action={
          <Fragment>
            <span className="home-text147 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan1Price1={
          <Fragment>
            <span className="home-text148 thq-heading-3">$999/year</span>
          </Fragment>
        }
        plan1Yearly={
          <Fragment>
            <span className="home-text149 thq-body-large">Save $189/year</span>
          </Fragment>
        }
        plan2Action={
          <Fragment>
            <span className="home-text150 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan2Price1={
          <Fragment>
            <span className="home-text151 thq-heading-3">$1999/year</span>
          </Fragment>
        }
        plan2Yearly={
          <Fragment>
            <span className="home-text152 thq-body-large">Save $389/year</span>
          </Fragment>
        }
        plan3Action={
          <Fragment>
            <span className="home-text153 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Price1={
          <Fragment>
            <span className="home-text154 thq-heading-3">$2999/year</span>
          </Fragment>
        }
        plan3Yearly={
          <Fragment>
            <span className="home-text155 thq-body-large">or $499 yearly</span>
          </Fragment>
        }
        plan1Action1={
          <Fragment>
            <span className="home-text156 thq-body-small">Get Started</span>
          </Fragment>
        }
        plan1Yearly1={
          <Fragment>
            <span className="home-text157 thq-body-large">or $20 monthly</span>
          </Fragment>
        }
        plan2Action1={
          <Fragment>
            <span className="home-text158 thq-body-small">Get started</span>
          </Fragment>
        }
        plan2Yearly1={
          <Fragment>
            <span className="home-text159 thq-body-large">or $29 monthly</span>
          </Fragment>
        }
        plan3Action1={
          <Fragment>
            <span className="home-text160 thq-body-small">Get started</span>
          </Fragment>
        }
        plan3Yearly1={
          <Fragment>
            <span className="home-text161 thq-body-large">or $49 monthly</span>
          </Fragment>
        }
        plan1Feature1={
          <Fragment>
            <span className="home-text162 thq-body-small">
              Feature 1 included
            </span>
          </Fragment>
        }
        plan1Feature2={
          <Fragment>
            <span className="home-text163 thq-body-small">
              Feature 2 included
            </span>
          </Fragment>
        }
        plan1Feature3={
          <Fragment>
            <span className="home-text164 thq-body-small">
              Feature 3 included
            </span>
          </Fragment>
        }
        plan2Feature1={
          <Fragment>
            <span className="home-text165 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature2={
          <Fragment>
            <span className="home-text166 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature3={
          <Fragment>
            <span className="home-text167 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature4={
          <Fragment>
            <span className="home-text168 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature1={
          <Fragment>
            <span className="home-text169 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature2={
          <Fragment>
            <span className="home-text170 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature3={
          <Fragment>
            <span className="home-text171 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature4={
          <Fragment>
            <span className="home-text172 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature5={
          <Fragment>
            <span className="home-text173 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan1Feature11={
          <Fragment>
            <span className="home-text174 thq-body-small">
              Feature 11 included
            </span>
          </Fragment>
        }
        plan1Feature21={
          <Fragment>
            <span className="home-text175 thq-body-small">
              Feature 21 included
            </span>
          </Fragment>
        }
        plan1Feature31={
          <Fragment>
            <span className="home-text176 thq-body-small">
              Feature 31 included
            </span>
          </Fragment>
        }
        plan2Feature11={
          <Fragment>
            <span className="home-text177 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature21={
          <Fragment>
            <span className="home-text178 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature31={
          <Fragment>
            <span className="home-text179 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan2Feature41={
          <Fragment>
            <span className="home-text180 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature11={
          <Fragment>
            <span className="home-text181 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature21={
          <Fragment>
            <span className="home-text182 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature31={
          <Fragment>
            <span className="home-text183 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature41={
          <Fragment>
            <span className="home-text184 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
        plan3Feature51={
          <Fragment>
            <span className="home-text185 thq-body-small">
              Feature text goes here
            </span>
          </Fragment>
        }
      ></Pricing14>
      <Steps2
        step1Title={
          <Fragment>
            <span className="home-text186 thq-heading-2">
              Initial Consultation
            </span>
          </Fragment>
        }
        step2Title={
          <Fragment>
            <span className="home-text187 thq-heading-2">
              Proposal Submission
            </span>
          </Fragment>
        }
        step3Title={
          <Fragment>
            <span className="home-text188 thq-heading-2">
              Development Phase
            </span>
          </Fragment>
        }
        step4Title={
          <Fragment>
            <span className="home-text189 thq-heading-2">
              Quality Assurance
            </span>
          </Fragment>
        }
        step1Description={
          <Fragment>
            <span className="home-text190 thq-body-small">
              Schedule a meeting with our team to discuss your software needs
              and goals.
            </span>
          </Fragment>
        }
        step2Description={
          <Fragment>
            <span className="home-text191 thq-body-small">
              Receive a detailed proposal outlining the scope of work, timeline,
              and cost.
            </span>
          </Fragment>
        }
        step3Description={
          <Fragment>
            <span className="home-text192 thq-body-small">
              Our team of experts will start developing your custom software
              solution.
            </span>
          </Fragment>
        }
        step4Description={
          <Fragment>
            <span className="home-text193 thq-body-small">
              Thorough testing and quality checks to ensure your software meets
              the highest standards.
            </span>
          </Fragment>
        }
      ></Steps2>
      <Testimonial17
        review1={
          <Fragment>
            <span className="home-text194 thq-body-small">
              The team at the software agency is top-notch! They delivered
              exceptional results and exceeded our expectations. Highly
              recommend their services.
            </span>
          </Fragment>
        }
        review2={
          <Fragment>
            <span className="home-text195 thq-body-small">
              I am impressed by the quality of work provided by the software
              agency. They were able to solve complex problems with ease and
              deliver on time.
            </span>
          </Fragment>
        }
        review3={
          <Fragment>
            <span className="home-text196 thq-body-small">
              Partnering with the software agency was a great decision. Their
              attention to detail and dedication to our project were truly
              commendable.
            </span>
          </Fragment>
        }
        review4={
          <Fragment>
            <span className="home-text197 thq-body-small">
              I have worked with many agencies before, but the level of
              professionalism and expertise shown by this software agency is
              unmatched.
            </span>
          </Fragment>
        }
        content1={
          <Fragment>
            <span className="home-text198 thq-body-small">
              Working with the software agency was a game-changer for our
              business. Their expertise and professionalism helped us achieve
              our goals efficiently.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text199 thq-heading-2">
              Client Testimonials
            </span>
          </Fragment>
        }
        author1Name={
          <Fragment>
            <span className="home-text200 thq-body-large">John Doe</span>
          </Fragment>
        }
        author2Name={
          <Fragment>
            <span className="home-text201 thq-body-large">Jane Smith</span>
          </Fragment>
        }
        author3Name={
          <Fragment>
            <span className="home-text202 thq-body-large">Michael Johnson</span>
          </Fragment>
        }
        author4Name={
          <Fragment>
            <span className="home-text203 thq-body-large">Sarah Williams</span>
          </Fragment>
        }
        author1Position={
          <Fragment>
            <span className="home-text204 thq-body-small">
              CEO, Company ABC
            </span>
          </Fragment>
        }
        author2Position={
          <Fragment>
            <span className="home-text205 thq-body-small">
              CTO, Company XYZ
            </span>
          </Fragment>
        }
        author3Position={
          <Fragment>
            <span className="home-text206 thq-body-small">
              COO, Company 123
            </span>
          </Fragment>
        }
        author4Position={
          <Fragment>
            <span className="home-text207 thq-body-small">
              CFO, Company LMN
            </span>
          </Fragment>
        }
      ></Testimonial17>
      <Contact10
        content1={
          <Fragment>
            <span className="home-text208 thq-body-large">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse varius enim in ero.
            </span>
          </Fragment>
        }
        heading1={
          <Fragment>
            <span className="home-text209 thq-heading-2">Contact Us</span>
          </Fragment>
        }
        location1={
          <Fragment>
            <span className="home-text210 thq-heading-3">New York Office</span>
          </Fragment>
        }
        location2={
          <Fragment>
            <span className="home-text211 thq-heading-3">
              San Francisco Office
            </span>
          </Fragment>
        }
        location1Description={
          <Fragment>
            <span className="home-text212 thq-body-large">
              123 Main Street, New York, NY 10001
            </span>
          </Fragment>
        }
        location2Description={
          <Fragment>
            <span className="home-text213 thq-body-large">
              456 Market Street, San Francisco, CA 94105
            </span>
          </Fragment>
        }
      ></Contact10>
      <Footer4
        link1={
          <Fragment>
            <span className="home-text214 thq-body-small">Home</span>
          </Fragment>
        }
        link2={
          <Fragment>
            <span className="home-text215 thq-body-small">Services</span>
          </Fragment>
        }
        link3={
          <Fragment>
            <span className="home-text216 thq-body-small">About Us</span>
          </Fragment>
        }
        link4={
          <Fragment>
            <span className="home-text217 thq-body-small">Contact Us</span>
          </Fragment>
        }
        link5={
          <Fragment>
            <span className="home-text218 thq-body-small">Blog</span>
          </Fragment>
        }
        termsLink={
          <Fragment>
            <span className="home-text219 thq-body-small">
              Terms and Conditions
            </span>
          </Fragment>
        }
        cookiesLink={
          <Fragment>
            <span className="home-text220 thq-body-small">Cookies Policy</span>
          </Fragment>
        }
        privacyLink={
          <Fragment>
            <span className="home-text221 thq-body-small">Privacy Policy</span>
          </Fragment>
        }
      ></Footer4>
    </div>
  )
}

export default Home
