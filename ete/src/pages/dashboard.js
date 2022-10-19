import React, { Component } from 'react';
import Header from "../elements/header";
// import Sidebar from "../elements/sidebar";
import { Link } from 'react-router-dom';


export default class Dashboard extends Component {

    render() {
        return (
            <div>
                <Header />
                <div id="wrapper">
                    {/* <Sidebar></Sidebar> */}
                    <div id="content-wrapper">
                        <div className="container-fluid">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">
                                    <Link to={'/dashboard'} >Dashboard</Link>
                                </li>
                                <li className="breadcrumb-item active">Overview</li>
                            </ol>

                            <div style={{ width: "100%", height: "45rem", display: "flex", justifyContent: "space-around", textAlign: "center" }} >

                                <img src="https://video-public.canva.com/VAFDEcuWykM/v/1524bf6c51.gif" width="600rem" height="600rem" />
                                <div style={{ float: "right" }}>
                                    <h1 style={{ color: "#3F0071", fontSize: "80px", fontWeight: "bold", marginTop: "15%", padding: "30px" }}><span>Meet your routine, reinvented.</span></h1>
                                    <p className='h2'>The only plastic-free and clean way to replace the paste you've used your whole life.</p>
                                </div>

                            </div>


                            

                            {/* <div class="w-100 text-left mw-650"><div><h1 class="animated fadeInUpSmooth mx-auto"><span id="headertxt" class="block">Meet your routine, reinvented.</span></h1><p class="text-2xl mw-600 animated swingInUp d-2">The only plastic-free and clean way to replace the paste you've used your whole life.</p></div><div class="x f flex-wrap mw-350"><a href="#" class="btn-main hover:bg-blue-500 mt-3 animated fadeInUpSmooth">Shop Now</a></div></div> */}

                            <div className="card my-3">
                                <div className="card-header">
                                    <i className="fas fa-chart-area"></i>
                                    Explore Your Potential
                                </div>

                                <div className='d-flex flex-row justify-content-around pt-5'>
                                    <div class="card" style={{ "width": "18rem" }} >
                                        <img class="card-img-top" src={`https://picsum.photos/200?t=${Math.random()}`} alt="Card image cap"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>

                                    <div class="card" style={{ "width": "18rem" }} >
                                        <img class="card-img-top" src={`https://picsum.photos/200?t=${Math.random()}`} alt="Card image cap"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                    <div class="card" style={{ "width": "18rem" }} >
                                        <img class="card-img-top" src={`https://picsum.photos/200?t=${Math.random()}`} alt="Card image cap"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                    <div class="card" style={{ "width": "18rem" }} >
                                        <img class="card-img-top" src={`https://picsum.photos/200?t=${Math.random()}`} alt="Card image cap"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                    <div class="card" style={{ "width": "18rem" }} >
                                        <img class="card-img-top" src={`https://picsum.photos/200?t=${Math.random()}`} alt="Card image cap"></img>
                                        <div class="card-body">
                                            <h5 class="card-title">Card title</h5>
                                            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                            <a href="#" class="btn btn-primary">Go somewhere</a>
                                        </div>
                                    </div>
                                </div>



                                <div className="card-body">
                                    <canvas id="myAreaChart" width="100%" height="30"></canvas>
                                </div>

                                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                            </div>



                            <div className="card mb-3">
                                <div className="card-header">
                                    <i className="fas fa-table"></i>
                                    Data Table Example
                                </div>
                                <div className="card-body">
                                    <div className="table-responsive">
                                        <table className="table table-bordered" id="dataTable" width="100%"
                                            cellSpacing="0">
                                            <thead style={{ background: "#3C4048", color: "white" }}>
                                                <tr>
                                                    <th>Name</th>
                                                    <th>Position</th>
                                                    <th>Office</th>
                                                    <th>Age</th>
                                                    <th>Start date</th>
                                                    <th>Salary</th>
                                                </tr>
                                            </thead>

                                            <tbody >



                                                <tr style={{ background: "#EAEAEA" }}>
                                                    <td>Suki Burks</td>
                                                    <td>Developer</td>
                                                    <td>London</td>
                                                    <td>53</td>
                                                    <td>2009/10/22</td>
                                                    <td>$114,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Prescott Bartlett</td>
                                                    <td>Technical Author</td>
                                                    <td>London</td>
                                                    <td>27</td>
                                                    <td>2011/05/07</td>
                                                    <td>$145,000</td>
                                                </tr>
                                                <tr style={{ background: "#EAEAEA" }}>
                                                    <td>Gavin Cortez</td>
                                                    <td>Team Leader</td>
                                                    <td>San Francisco</td>
                                                    <td>22</td>
                                                    <td>2008/10/26</td>
                                                    <td>$235,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Martena Mccray</td>
                                                    <td>Post-Sales support</td>
                                                    <td>Edinburgh</td>
                                                    <td>46</td>
                                                    <td>2011/03/09</td>
                                                    <td>$324,050</td>
                                                </tr>
                                                <tr style={{ background: "#EAEAEA" }}>
                                                    <td>Unity Butler</td>
                                                    <td>Marketing Designer</td>
                                                    <td>San Francisco</td>
                                                    <td>47</td>
                                                    <td>2009/12/09</td>
                                                    <td>$85,675</td>
                                                </tr>
                                                <tr>
                                                    <td>Howard Hatfield</td>
                                                    <td>Office Manager</td>
                                                    <td>San Francisco</td>
                                                    <td>51</td>
                                                    <td>2008/12/16</td>
                                                    <td>$164,500</td>
                                                </tr>
                                                <tr style={{ background: "#EAEAEA" }}>
                                                    <td>Hope Fuentes</td>
                                                    <td>Secretary</td>
                                                    <td>San Francisco</td>
                                                    <td>41</td>
                                                    <td>2010/02/12</td>
                                                    <td>$109,850</td>
                                                </tr>
                                                <tr>
                                                    <td>Vivian Harrell</td>
                                                    <td>Financial Controller</td>
                                                    <td>San Francisco</td>
                                                    <td>62</td>
                                                    <td>2009/02/14</td>
                                                    <td>$452,500</td>
                                                </tr>
                                                <tr style={{ background: "#EAEAEA" }}>
                                                    <td>Timothy Mooney</td>
                                                    <td>Office Manager</td>
                                                    <td>London</td>
                                                    <td>37</td>
                                                    <td>2008/12/11</td>
                                                    <td>$136,200</td>
                                                </tr>
                                                <tr>
                                                    <td>Jackson Bradshaw</td>
                                                    <td>Director</td>
                                                    <td>New York</td>
                                                    <td>65</td>
                                                    <td>2008/09/26</td>
                                                    <td>$645,750</td>
                                                </tr>
                                                <tr style={{ background: "#EAEAEA" }}>
                                                    <td>Olivia Liang</td>
                                                    <td>Support Engineer</td>
                                                    <td>Singapore</td>
                                                    <td>64</td>
                                                    <td>2011/02/03</td>
                                                    <td>$234,500</td>
                                                </tr>
                                                <tr>
                                                    <td>Bruno Nash</td>
                                                    <td>Software Engineer</td>
                                                    <td>London</td>
                                                    <td>38</td>
                                                    <td>2011/05/03</td>
                                                    <td>$163,500</td>
                                                </tr>
                                                <tr style={{ background: "#EAEAEA" }}>
                                                    <td>Sakura Yamamoto</td>
                                                    <td>Support Engineer</td>
                                                    <td>Tokyo</td>
                                                    <td>37</td>
                                                    <td>2009/08/19</td>
                                                    <td>$139,575</td>
                                                </tr>


                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                <div className="card-footer small text-muted">Updated yesterday at 11:59 PM</div>
                            </div>

                        </div>

                        <footer className="sticky-footer">
                            <div className="container my-auto">
                                <div className="copyright text-center my-auto">
                                    <span>Copyright © Urvashi_Sunishtha 2022</span>
                                </div>
                            </div>
                        </footer>
                    </div>
                </div>
            </div>

        );
    }
}