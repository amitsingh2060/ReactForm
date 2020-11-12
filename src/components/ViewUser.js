import React, { Component } from 'react';
import axios from 'axios'
class ViewUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: true,
            data: [],
            error: null,
        };

    }
    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.setState({
                    isLoaded: true,
                    data: response.data
                });
            })
          
        
    }
  

    render() {
        return (
            <div className="col-lg-12 mt-5">
                <div className="card">
                    <div className="card-body">
                        <div className="invoice-area">
                            <div class="invoice-head">
                                <div class="row">
                                    <div class="iv-left col-6">
                                        <span>USER INFORMATION</span>
                                    </div>
                                </div>
                            </div>
                            <div className="invoice-table table-responsive mt-5">
                                <table className="table table-bordered table-hover text-right" id="data">
                                    <thead>
                                        <tr className="text-capitalize">
                                            <th className="text-center">Id</th>
                                            <th classNameName="text-left" >Name</th>
                                            <th>Email</th>
                                            <th >Phone</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {this.state.data ? this.state.data.map((user) => {

                                            return (
                                                <tr key={user.id}>
                                                    <td>{user.id}</td>
                                                    <td>{user.name}</td>
                                                    <td>{user.email}</td>
                                                    <td>{user.phone}</td>
                                                </tr>
                                            )
                                        }) : null}
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );

    }
}

export default ViewUser