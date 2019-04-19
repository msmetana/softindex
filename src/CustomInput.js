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
              // pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
              required
            />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CustomInput
