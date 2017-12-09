import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux'

class Navigation extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        const { categories } = this.props
        return (
            <div className="nav-class">
                {console.log(this.props.categories)}
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">Readable</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {(categories)?(categories.map((category) => (
                                    <NavItem>
                                        <NavLink href="/components/">{category.name}</NavLink>
                                    </NavItem>
                                ))
                            ):(<span></span>)}
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps(data) {

    if(data.categories.categories) {
        return {
            categories: data.categories.categories.categories
        }
    }
    else {
        return {
            categories: data.categories.categories
        }
    }

}

export default connect(mapStateToProps)(Navigation)