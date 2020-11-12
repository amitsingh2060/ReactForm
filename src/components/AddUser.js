import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
const initialState = {
    userId: 'userid',
    address: '',
    email: '',
    name: '',
    city: '',
    street: '',
    phone: '',
    nameError: "",
    emailError: "",
    addressError: "",
    phoneError: "",
    streetError: "",
    cityError: ""
};

class AddUser extends Component {
    state = initialState;
   
    validate = () => {
        let nameError = "";
        let emailError = "";
        let streetError = "";
        let addressError = "";
        let cityError = "";
        let phoneError = "";


        if (!this.state.name) {
            nameError = "Name cannot be blank";
        }

        if (!this.state.email.includes("@")) {
            emailError = "invalid email";
        }
       
        if (!this.state.street && this.state.address) {
            streetError = "Street cannot be balnk";
        }
        if (!this.state.phone) {
            phoneError = "Phone cannot be balnk";
        }
        if (!this.state.city) {
            cityError = "City cannot be balnk";
        }

        if (emailError || nameError || cityError || phoneError || streetError) {
            this.setState({ emailError, nameError, cityError, addressError, phoneError, streetError });
            return false;
        }
        this.setState({ emailError, nameError, emailError, nameError, cityError, addressError, phoneError, streetError });
        return true;
    };
   

    handleSubmit = event => {
        event.preventDefault();
        const isValid = this.validate();
        if (isValid) {
            alert("Form Saved")
        }
    };
    handleChange = event => {
        const isCheckbox = event.target.type === "checkbox";
        this.setState({
            [event.target.name]: isCheckbox
                ? event.target.checked
                : event.target.value
        });
        console.log(this.state)
    };
    handleCancel = () => {
        this.setState(initialState);
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div class="col-12 mt-5">
                    <div class="card">
                        <div class="card-body">
                            <div class="invoice-head">
                                <div class="row">
                                    <div class="iv-left col-6">
                                        <span>USER FORM</span>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-4 form-group">
                                    <label for="example-tel-input" class="col-form-label">Name</label>
                                    <input
                                        name="name"
                                        class="form-control"
                                        value={this.state.name}
                                        onChange={this.handleChange}
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.nameError}
                                    </div>
                                </div>
                                <div class="col-4 form-group">
                                    <label for="example-tel-input" class="col-form-label">Email</label>
                                    <input
                                        name="email"
                                        class="form-control"
                                        value={this.state.email}
                                        onChange={this.handleChange}
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.emailError}
                                    </div>

                                </div>
                                <div class="col-4 form-group">

                                    <label for="example-tel-input" class="col-form-label">Address</label>
                                    <input
                                        name="address"
                                        class="form-control"
                                        value={this.state.address}
                                        onChange={this.handleChange}
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.addressError}
                                    </div>
                                </div>
                                {this.state.address ?
                                    <div class="col-4 form-group">
                                        <label for="example-number-input" class="col-form-label">Street</label>
                                        <input
                                            name="street"
                                            class="form-control"
                                            value={this.state.street}
                                            onChange={this.handleChange}
                                        />
                                        <div style={{ fontSize: 12, color: "red" }}>
                                            {this.state.streetError}
                                        </div>
                                    </div> : null
                                }

                                <div class="col-4 form-group">
                                    <label for="example-number-input" class="col-form-label">City</label>
                                    <input
                                        name="city"
                                        class="form-control"
                                        value={this.state.city}
                                        onChange={this.handleChange}
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.cityError}
                                    </div>
                                </div>

                                <div class="col-4 form-group">
                                    <label for="example-number-input" class="col-form-label">Phone</label>
                                    <input
                                        name="phone"
                                        class="form-control"
                                        value={this.state.phone}
                                        onChange={this.handleChange}
                                        type="number"
                                    />
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {this.state.phoneError}
                                    </div>
                                </div>

                            </div>
                            <div class="invoice-buttons text-left mt-4">
                                <Button type="submit" variant="contained" color="primary">submit</Button>

                                <Button style={{margin:"1rem"}}variant="contained" color="primary" onClick={this.handleCancel}>Cancel</Button>
                            </div>

                        </div>
                    </div>
                </div>
            </form>

        );

    }
}

export default AddUser