import React, { Component } from 'react';

class Header extends Component {
    render() {
        return (
            <div class="page-title-area">
                <div class="row align-items-center">
                    <div class="col-sm-6">
                        <div class="breadcrumbs-area clearfix">
                            <h4 class="page-title pull-left">React</h4>
                        </div>
                    </div>
                    <div class="col-sm-6 clearfix">
                        <div class="user-profile pull-right">
                            <img class="avatar user-thumb" src="assets/images/author/avatar.png" alt="avatar"></img>
                            <h4 class="user-name dropdown-toggle" data-toggle="dropdown">{this.props.headername} <i class="fa fa-angle-down"></i></h4>
                            {/* <div class="dropdown-menu">
                                <a class="dropdown-item" href="#">Message</a>
                                <a class="dropdown-item" href="#">Settings</a>
                                <a class="dropdown-item" href="#">Log Out</a>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}

export default Header