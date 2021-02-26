import { Component } from "react";
import "./style/Form.css";

class Form extends Component {
  render() {
    return (
      <form className="form" onSubmit={(e) => this.props.onSubmit(e)}>
        <input
          className="form__inputText"
          type="text"
          name="data"
          placeholder="Datos"
          required
          value={this.props.valueInput}
          onChange={this.props.handleChange}
        />
        <input className="form__inputSubmit" type="submit" value=">" />
      </form>
    );
  }
}

export default Form;
