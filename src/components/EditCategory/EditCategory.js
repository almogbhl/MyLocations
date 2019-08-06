import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { editCategoryItem } from "../Categories/Categories.actions";

class EditCategory extends Component {
  state = {
    oldCategoryName: "",
    newCategoryName: "",
    errMsg: ""
  };

  componentDidMount() {
    const value = this.props.match.params.id;
    this.setState({ oldCategoryName: value, newCategoryName: value });
  }

  handleInputChange = event => {
    this.setState({
      newCategoryName: event.target.value
    });
  };

  checkValidation = () => {
    const { categoriesList } = this.props;
    const { oldCategoryName, newCategoryName } = this.state;
    const checkDuplicate = categoriesList.find(
      item => item === newCategoryName
    );

    if (!newCategoryName.length) {
      this.setState({
        errMsg: "This part can't be empty!"
      });
    } else if (checkDuplicate === undefined) {
      this.setState({
        errMsg: ""
      });

      this.props.do_editCategoryItem({
        oldCategoryName,
        newCategoryName
      });
      this.props.history.push("/categories");
    } else if (oldCategoryName === newCategoryName) {
      this.setState({
        errMsg: "No changes detected!"
      });
    } else {
      this.setState({
        errMsg: "The Category is already exist!"
      });
    }
  };

  submitForm = e => {
    this.checkValidation();
    e.preventDefault();
  };

  previousPage = () => {
    this.props.history.goBack();
  };

  render() {
    const ErrMsg = this.state.errMsg;
    return (
      <S.Container>
        <S.Box>
          <S.Title>Edit Category</S.Title>
          <S.Input
            type="text"
            value={this.state.newCategoryName}
            onChange={this.handleInputChange}
          />
          <S.Error>
            <S.Msg>{ErrMsg}</S.Msg>
          </S.Error>
          <S.ButtonBox>
            <S.Button onClick={this.previousPage}>Back</S.Button>
            <S.Button onClick={this.submitForm}>Edit</S.Button>
          </S.ButtonBox>
        </S.Box>
      </S.Container>
    );
  }
}

const mapStateToProps = state => ({
  categoriesList: state.categories.categoriesList
});

const mapDispatchToProps = dispatch => {
  return {
    do_editCategoryItem: item => dispatch(editCategoryItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditCategory);

const S = {};

S.Container = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid lightgrey;
`;

S.Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 20rem;
  padding: 2rem;
  flex-direction: column;
  border: 1px solid lightgrey;
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
