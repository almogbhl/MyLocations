import React, { Component } from "react";
import styled from "styled-components";
import { connect } from "react-redux";
import { addCategoryItem } from "../Categories/Categories.actions";

class AddCategory extends Component {
  state = {
    categoryName: "",
    errMsg: ""
  };

  handleInputChange = event => {
    this.setState({
      categoryName: event.target.value
    });
  };

  checkValidation = categoryName => {
    const { categoriesList } = this.props;

    if (!categoryName.length) {
      return this.setState({
        errMsg: "This part cannot be empty"
      });
    }

    if (categoriesList) {
      const checkDuplicate = categoriesList.find(item => item === categoryName);
      if (checkDuplicate === undefined) {
        return this.addCategory(categoryName);
      } else {
        return this.setState({
          errMsg: "The Category is already exist!"
        });
      }
    } else {
      return this.addCategory(categoryName);
    }
  };

  addCategory = categoryName => {
    this.setState({
      errMsg: ""
    });
    this.props.do_addCategoryItem(categoryName);
    this.props.history.push("/categories");
  };

  submitForm = e => {
    const categoryName = this.state.categoryName;

    this.checkValidation(categoryName);
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
          <S.Title>Add New Category</S.Title>
          <S.Input type="text" onChange={this.handleInputChange} />
          <S.Error>
            <S.Msg>{ErrMsg}</S.Msg>
          </S.Error>
          <S.ButtonBox>
            <S.Button onClick={this.previousPage}>Back</S.Button>
            <S.Button onClick={this.submitForm}>Add</S.Button>
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
    do_addCategoryItem: item => dispatch(addCategoryItem(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddCategory);

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
