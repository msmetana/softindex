import React, {Component} from 'react';

class CustomInput extends Component {

  handleChange = (e: OnChangeEvent) => {
    this.props.onChangeValue(e.target.value);
  }

  render() {
    const {
      value,
      type,
      placeholder,
      className,
      classNameLabel
    } = this.props;

    return (
      <React.Fragment>
        <div className="form-group">
          <label className={classNameLabel}>
            {value && placeholder}
          </label>
          <div className={className}>
            <input
              type={type}
              onChange={this.handleChange}
              placeholder={placeholder}
              value={value}
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomInput
