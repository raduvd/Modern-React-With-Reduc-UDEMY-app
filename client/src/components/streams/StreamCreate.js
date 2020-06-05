import React from "react";
import { Field, reduxForm } from "redux-form";

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {};
  renderInput = (fieldAtributes) => {
    return (
      <div className="field">
        <label>{fieldAtributes.labelText}</label>
        <input
          value={fieldAtributes.input.value}
          onChange={fieldAtributes.input.onChange}
        />
        <div>{fieldAtributes.meta.error}</div>
      </div>
    );
  };

  render = () => {
    return (
      <form
        className="ui form"
        onSubmit={this.props.handleSubmit(this.onSubmit)}
      >
        <Field
          name="title"
          component={this.renderInput}
          labelText="Enter Title"
        />
        <Field
          name="description"
          component={this.renderInput}
          labelText="Enter Description"
        />
        <button className="ui button primary">Submit</button>
      </form>
    );
  };
}

const validate = (formValues) => {
  const errors = {};
  if (!formValues.title) {
    errors.title = "You must enter a title";
  }
  if (!formValues.description) {
    errors.description = "You must enter a description";
  }

  return errors;
};
export default reduxForm({ form: "streamCreate", validate })(StreamCreate);
