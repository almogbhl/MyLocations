import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import GoogleMapContainer from "../GoogleMap/GoogleMap";
import Options from "../UI/Options/Options";
import { editLocationItem } from "../Locations/Locations.actions";

class EditLocation extends Component {
  state = {
    errMsg: "",
    formIsValid: false,
    marker: {},
    oldFormData: null,
    formData: {
      name: {
        value: "",
        isRequired: true,
        isValid: false
      },
      address: {
        value: "",
        isRequired: true,
        isValid: false
      },
      longitude: {
        value: "",
        isRequired: true,
        isValid: false
      },
      latitude: {
        value: "",
        isRequired: true,
        isValid: false
      },
      category: {
        value: "",
        isRequired: true,
        isValid: false
      }
    }
  };

  componentDidMount() {
    const {
      marker,
      name,
      address,
      longitude,
      latitude,
      category
    } = this.props.oldData.data;

    const oldFormData = { name, address, longitude, latitude, category };
    const newMarker = marker;

    this.setState({
      formData: oldFormData,
      marker: newMarker,
      oldFormData: oldFormData
    });
  }

  handleInputChange = event => {
    const newFormData = { ...this.state.formData };
    const newElement = { ...newFormData[event.target.name] };
    newElement.value = event.target.value;
    newFormData[event.target.name] = newElement;

    this.setState({
      formData: newFormData
    });
  };

  handleMapClick = event => {
    const newFormData = { ...this.state.formData };

    newFormData.latitude.value = event.latLng.lat();
    newFormData.latitude.isValid = true;

    newFormData.longitude.value = event.latLng.lng();
    newFormData.longitude.isValid = true;

    const newMarker = {
      position: event.latLng,
      defaultAnimation: 5,
      key: Date.now()
    };

    this.setState({
      formData: newFormData,
      marker: newMarker
    });
  };

  validateItem = ({ value, isRequired }, key) => {
    const newFormData = { ...this.state.formData };
    if (newFormData[key].isValid === true) {
      return;
    }

    if (!value.length && isRequired) {
      newFormData[key].isValid = false;

      this.setState({
        errMsg: `${key} is requeird!`,
        formData: newFormData
      });

      return false;
    }

    newFormData[key].isValid = true;

    this.setState({
      errMsg: "",
      formData: newFormData
    });
  };

  checkValidation = () => {
    for (let key in this.state.formData) {
      if (this.validateItem(this.state.formData[key], key) === false) {
        return;
      }
    }
  };

  validateForm = formData => {
    for (let key in formData) {
      if (formData[key].isValid === false) {
        return;
      }
    }

    formData.marker = this.state.marker;

    if (this.state.oldFormData != null) {
      this.props.do_editLocationItem({
        oldFormData: this.state.oldFormData,
        formData
      });

      this.props.history.push("/locations");
    } else {
      this.setState({
        errMsg: "an error has occurred"
      });
    }
  };

  submitForm = e => {
    e.preventDefault();

    this.checkValidation();

    this.validateForm(this.state.formData);
  };

  previousPage = () => {
    this.props.history.goBack();
  };

  render() {
    const ErrMsg = this.state.errMsg;

    return (
      <S.Container>
        <S.Box>
          <S.Title>Edit Location</S.Title>
          <S.Input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.formData.name.value}
            onChange={this.handleInputChange}
          />
          <S.Input
            type="text"
            name="address"
            placeholder="Address"
            value={this.state.formData.address.value}
            onChange={this.handleInputChange}
          />
          <S.Input
            type="text"
            name="latitude"
            placeholder="Latitude"
            value={this.state.formData.latitude.value}
            onChange={this.handleInputChange}
          />
          <S.Input
            type="text"
            name="longitude"
            placeholder="Longitude"
            value={this.state.formData.longitude.value}
            onChange={this.handleInputChange}
          />
          <S.Select
            name="category"
            onChange={this.handleInputChange}
            onFocus={this.handleInputChange}
          >
            <Options data={this.props.categoriesList} />
          </S.Select>
          <S.Error>
            <S.Msg>{ErrMsg}</S.Msg>
          </S.Error>
          <S.ButtonBox>
            <S.Button onClick={this.previousPage}>Back</S.Button>
            <S.Button onClick={this.submitForm}>Edit</S.Button>
          </S.ButtonBox>
        </S.Box>
        <S.Box>
          <GoogleMapContainer
            marker={this.state.marker}
            onMapClick={this.handleMapClick}
          />
        </S.Box>
      </S.Container>
    );
  }
}
const mapStateToProps = state => ({
  locationsList: state.locations.locationsList,
  categoriesList: state.categories.categoriesList,
  oldData: state.mapPage.oldData
});

const mapDispatchToProps = dispatch => {
  return {
    do_editLocationItem: item => dispatch(editLocationItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditLocation);

const S = {};

S.Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;

  @media (max-width: 670px) {
    flex-direction: column;
  }
`;

S.Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 500px;
  width: 500px;
  padding: 2rem;
  flex-direction: column;
  border: 1px solid lightgrey;

  @media (max-width: 670px) {
    width: 100%;
    height: 400px;
  }
`;

S.Title = styled.h3`
  font-size: 3rem;
  margin-bottom: 1rem;
  color: grey;
`;

S.ButtonBox = styled.div`
  display: flex;
`;

S.Button = styled.button`
  padding: 1rem;
  font-size: 1.5rem;
  width: 12rem;
  border-radius: 4px;
  border: none;
  margin-right: 1rem;
  color: white;
  background-color: #c1c1c1;
  cursor: pointer;

  &:last-child {
    background-color: #f7b239;
    margin-right: 0;
  }
`;

S.Input = styled.input`
  height: 3rem;
  font-size: 2rem;
  border: 2px solid gray;
  width: 20rem;
  padding: 0.5rem;

  @media (max-width: 670px) {
    margin: 0.5rem 0;
  }
`;

S.Error = styled.div`
  margin: 1rem;
`;

S.Msg = styled.p`
  color: red;
  font-weight: bold;
  font-size: 1.5rem;
  text-align: center;
`;

S.Select = styled.select`
  height: 3rem;
  font-size: 2rem;
  color: grey;
  font-family: "verdana";
  border: 2px solid gray;
  width: 20rem;

  @media (max-width: 670px) {
    margin: 0.5rem 0;
  }
`;
