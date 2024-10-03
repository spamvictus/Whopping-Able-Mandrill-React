import React, { Fragment } from 'react'

import PropTypes from 'prop-types'

import './testimonial17.css'

const Testimonial17 = (props) => {
  return (
    <div className="thq-section-padding">
      <div className="testimonial17-max-width thq-section-max-width">
        <div className="testimonial17-container10">
          <h2>
            {props.heading1 ?? (
              <Fragment>
                <h2 className="testimonial17-text36 thq-heading-2">
                  Client Testimonials
                </h2>
              </Fragment>
            )}
          </h2>
          <span>
            {props.content1 ?? (
              <Fragment>
                <span className="testimonial17-text27 thq-body-small">
                  Working with the software agency was a game-changer for our
                  business. Their expertise and professionalism helped us
                  achieve our goals efficiently.
                </span>
              </Fragment>
            )}
          </span>
        </div>
        <div className="thq-grid-2">
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card1"
              >
                <div className="testimonial17-container12">
                  <img
                    alt={props.author1Alt}
                    src={props.author1Src}
                    className="testimonial17-image1"
                  />
                  <div className="testimonial17-container13">
                    <strong>
                      {props.author1Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text32 thq-body-large">
                            John Doe
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author1Position ?? (
                        <Fragment>
                          <span className="testimonial17-text35 thq-body-small">
                            CEO, Company ABC
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review1 ?? (
                    <Fragment>
                      <span className="testimonial17-text28 thq-body-small">
                        The team at the software agency is top-notch! They
                        delivered exceptional results and exceeded our
                        expectations. Highly recommend their services.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card2"
              >
                <div className="testimonial17-container14">
                  <img
                    alt={props.author2Alt}
                    src={props.author2Src}
                    className="testimonial17-image2"
                  />
                  <div className="testimonial17-container15">
                    <strong>
                      {props.author2Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text31 thq-body-large">
                            Jane Smith
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author2Position ?? (
                        <Fragment>
                          <span className="testimonial17-text25 thq-body-small">
                            CTO, Company XYZ
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review2 ?? (
                    <Fragment>
                      <span className="testimonial17-text33 thq-body-small">
                        I am impressed by the quality of work provided by the
                        software agency. They were able to solve complex
                        problems with ease and deliver on time.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card3"
              >
                <div className="testimonial17-container16">
                  <img
                    alt={props.author3Alt}
                    src={props.author3Src}
                    className="testimonial17-image3"
                  />
                  <div className="testimonial17-container17">
                    <strong>
                      {props.author3Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text24 thq-body-large">
                            Michael Johnson
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author3Position ?? (
                        <Fragment>
                          <span className="testimonial17-text37 thq-body-small">
                            COO, Company 123
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review3 ?? (
                    <Fragment>
                      <span className="testimonial17-text34 thq-body-small">
                        Partnering with the software agency was a great
                        decision. Their attention to detail and dedication to
                        our project were truly commendable.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
          <div className="thq-animated-card-bg-2">
            <div className="thq-animated-card-bg-1">
              <div
                data-animated="true"
                className="thq-card testimonial17-card4"
              >
                <div className="testimonial17-container18">
                  <img
                    alt={props.author4Alt}
                    src={props.author4Src}
                    className="testimonial17-image4"
                  />
                  <div className="testimonial17-container19">
                    <strong>
                      {props.author4Name ?? (
                        <Fragment>
                          <strong className="testimonial17-text29 thq-body-large">
                            Sarah Williams
                          </strong>
                        </Fragment>
                      )}
                    </strong>
                    <span>
                      {props.author4Position ?? (
                        <Fragment>
                          <span className="testimonial17-text30 thq-body-small">
                            CFO, Company LMN
                          </span>
                        </Fragment>
                      )}
                    </span>
                  </div>
                </div>
                <span>
                  {props.review4 ?? (
                    <Fragment>
                      <span className="testimonial17-text26 thq-body-small">
                        I have worked with many agencies before, but the level
                        of professionalism and expertise shown by this software
                        agency is unmatched.
                      </span>
                    </Fragment>
                  )}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Testimonial17.defaultProps = {
  author2Alt: 'Image of Jane Smith',
  author3Name: undefined,
  author2Position: undefined,
  review4: undefined,
  author4Src:
    'https://images.unsplash.com/photo-1454094309557-181967334e22?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzk0NjI5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  author1Alt: 'Image of John Doe',
  content1: undefined,
  review1: undefined,
  author4Name: undefined,
  author3Alt: 'Image of Michael Johnson',
  author4Position: undefined,
  author2Name: undefined,
  author1Name: undefined,
  review2: undefined,
  author1Src:
    'https://images.unsplash.com/photo-1709651669999-57741c9bf085?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzk0NjI5NHw&ixlib=rb-4.0.3&q=80&w=1080',
  review3: undefined,
  author1Position: undefined,
  heading1: undefined,
  author3Position: undefined,
  author2Src:
    'https://images.unsplash.com/photo-1652129950700-8517fe5d068d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzk0NjI5NXw&ixlib=rb-4.0.3&q=80&w=1080',
  author4Alt: 'Image of Sarah Williams',
  author3Src:
    'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcyNzk0NjI5NXw&ixlib=rb-4.0.3&q=80&w=1080',
}

Testimonial17.propTypes = {
  author2Alt: PropTypes.string,
  author3Name: PropTypes.element,
  author2Position: PropTypes.element,
  review4: PropTypes.element,
  author4Src: PropTypes.string,
  author1Alt: PropTypes.string,
  content1: PropTypes.element,
  review1: PropTypes.element,
  author4Name: PropTypes.element,
  author3Alt: PropTypes.string,
  author4Position: PropTypes.element,
  author2Name: PropTypes.element,
  author1Name: PropTypes.element,
  review2: PropTypes.element,
  author1Src: PropTypes.string,
  review3: PropTypes.element,
  author1Position: PropTypes.element,
  heading1: PropTypes.element,
  author3Position: PropTypes.element,
  author2Src: PropTypes.string,
  author4Alt: PropTypes.string,
  author3Src: PropTypes.string,
}

export default Testimonial17
