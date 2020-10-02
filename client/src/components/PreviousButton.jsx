import React from 'react';
import styled from 'styled-components';

const Previous = styled.button`
  display: inline-flex;
  appearance: none
  margin: 0px;
  padding: 0px;
  border-radius: 50%;
  background-color: white;
  border: 1px solid white;
  outline: none;
  touch-action: manipulation;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  width: 32px;
  height: 32px;
  box-shadow: 0px 0px 12px #888888;
  margin-right: 13px;
`;

class PreviousButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    // THIS BINDING AREA
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const { prevSlide } = this.props;
    prevSlide(event);
  }

  render() {
    return (
      <Previous className='prevSlide' onClick={(event) => this.handleClick(event)}> &lt; </Previous>
    );
  }
}

export default PreviousButton;
