import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap';
import { connect } from 'react-redux'
import  { Link } from 'react-router-dom'

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
        const selected = this.props.value
        return (
            <div className="nav-class">
                <Navbar color="faded" light expand="md">
                    <Link to="/" className="navbar-brand">Readable</Link>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {(categories)&&(categories.map(function (category) {
                                if(selected === category.name) {
                                    return (
                                        <Link
                                            to={`/category/${category.path}`}
                                            className="nav-link active"
                                            key={category.name}>
                                            {category.name}
                                        </Link>
                                    )
                                }
                                else {
                                    return (
                                        <Link
                                            to={`/category/${category.path}`}
                                            className="nav-link"
                                            key={category.name}>
                                            {category.name}
                                        </Link>
                                    )
                                }
                            }))}
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