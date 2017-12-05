import React from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default class Sort extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            dropdownOpen: false
        };
    }

    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }

    render() {
        return (
            <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle caret>
                    Sort By
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Score</DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem>Time</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>
        );
    }
}