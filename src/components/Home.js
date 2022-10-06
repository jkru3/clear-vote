import React, {useState} from 'react';
import Slider from './Slider';
import Issues from '../issues.json';
import Button from 'react-bootstrap/Button'
import Collapse from 'react-bootstrap/Collapse'

export default function Home() {

  const [open, setOpen] = useState(false);

  return (
    <div>
      <div className="image">
        <div className="container-fluid">
          <div className="row m-1 mt-md-4 ms-md-5">
            <div className="col-md-5 col-lg-7 ps-2 text-center text-md-start text-lg-center text-nowrap my-auto">  
              <h1 className="">You deserve <br className="d-none d-md-inline d-lg-none" /> to be informed.</h1>
            </div>
            <div className="col-md-7 col-lg-5 ps-4 text-center my-auto">        
              <h6> <strong>Clear Vote</strong> lets you visibly see the motivations of your local election candidates so you don't have to guess.</h6>
            </div>
          </div>
          <div className="row mt-md-3 ms-1 ms-md-5"> 
            <div className="col-md-4 col-lg-6 ps-2 d-grid d-md-block text-lg-center">
              <Button
                onClick={() => setOpen(!open)}
                aria-expanded={open}
                aria-controls="collapseID"
                className="btn btn-primary collapsed" 
                type="button" 
                data-bs-toggle="collapse" 
                data-bs-target="#collapseExample" 
              >
                Let's get started
              </Button>
            </div>
          </div>

          <Collapse in={open}>
            <div id="collapseID">
              <div className="collapse show m-2 m-md-5" id="collapseExample">
                <div className="card card-body bg-white bg-opacity-50">
                  <div className="row text-center">
                    <p>Move each slider to a position that best represents your values. (don't worry, you can change it later!)</p> 
                  </div>
                  <ul id="list">
                    <li> 
                      {
                        Issues && Issues.map( issue => {
                          return(
                            <div key={ issue.id }>
                              <Slider
                                icon={ issue.icon }
                                affirmativeStance={ issue.affirmativeStance }
                                affirmativeExplanation={ issue.affirmativeExplanation }
                                negativeStance={ issue.negativeStance }
                                negativeExplanation={ issue.negativeExplanation }
                              />
                            </div>
                          )
                        })
                      }
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </Collapse>
        </div>
      </div>    
    </div>
  )
}

                  

                    {/*<li> 
                      <div className="row">
                        <div className="col col-auto my-auto">
                          <span className="issue-name affirmative negative neutral"></span>
                        </div>
                        <div className="col my-auto">
                          <input className="icon" type="image" src={require('../img/circle-question-regular.svg').default} alt={"¯\\_(ツ)_/¯"} data-bs-toggle="popover" data-placement="top"/>
                        </div>
                      </div>
                      <div className="row">
                        <div className="slidecontainer">
                          <input type="range" min="0" max="100" value="0" className="slider" />
                          <div className="selector">
                            <div className="select-btn" style={{}}></div>
                            <div className="SelectValue"></div>
                          </div>
                          <div className="ProgressBar"></div>
                        </div>
                      </div>  
                    </li>*/}