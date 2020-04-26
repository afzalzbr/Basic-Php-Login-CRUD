import React from 'react';
import { Navbar, NavbarBrand, Jumbotron } from 'reactstrap';


class Header extends React.Component {
    render() {
        return (
            <>
                <Navbar dark>
                    <div className="container">
                        <NavbarBrand href="/">Ristoreante Con Fusion</NavbarBrand>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Fistoranter Con Fusion</h1>
                                <p>We take inspiratioon from the World's best cusine, and create a unique fusion experience. Out lipsmacking creations will tickle your culinary sense.</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>
            </>
        )
    }
}

export default Header;