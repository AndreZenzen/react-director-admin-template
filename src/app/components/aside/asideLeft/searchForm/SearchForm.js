import React, {
  Component,
  PropTypes
}                     from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class SearchForm extends Component {

  componentDidMount() {
    this.searchinput.focus();
  }

  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <form
        className="sidebar-form"
        onKeyPress={this.handlesFormKeyPress}>
        <div className="input-group">
          <input
            ref={this.getRef}
            type="text"
            name="searchinput"
            className="form-control"
            placeholder="Search..."/>
          <span className="input-group-btn">
            <button
              onClick={this.handlesFormKeyPress}
              name="search"
              id="search-btn"
              className="btn btn-flat">
              <i className="fa fa-search"></i>
            </button>
          </span>
        </div>
      </form>
    );
  }

  getRef = (ref) => {
    this.searchinput = ref;
  }

  handlesButtonPress = (event) => {
    event.preventDefault();
    const { onSearchSubmit } = this.props;
    onSearchSubmit(this.searchinput.value.trim());
  }

  handlesFormKeyPress = (event) => {
    if (event.charCode === 13) {
      event.preventDefault();
      const { onSearchSubmit } = this.props;
      onSearchSubmit(this.searchinput.value.trim());
    }
  }
}

SearchForm.propTypes = {
  onSearchSubmit: PropTypes.func
};

export default SearchForm;
