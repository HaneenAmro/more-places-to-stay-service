/* eslint-disable react/destructuring-assignment */
/* eslint-disable import/extensions */
import React from 'react';
import styled from 'styled-components';
import Listing from './Listing.jsx';
import Next from './NextButton.jsx';
import Previous from './PreviousButton.jsx';
import Modal from './Modal.jsx';
// import dummyData from './dummyData';
import GlobalFonts from '../fonts/fonts';

const axios = require('axios');

const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 24px;
  margin-left: 353px;
  font-weight: 400;
  font-size: 20px;
  line-height: 20px;
  font-family: 'AirbnbCerealMedium';
  `;

const ComponentWrapper = styled.div`
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: #f7f7f7;
`;

let scroll = 0;

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      seededData: [],
      scrollPosition: 0,
      motion: scroll,
      show: false,
      isSaved: false,
    };
    // THIS BINDING AREA
    this.getSeededData = this.getSeededData.bind(this);
    this.showModal = this.showModal.bind(this);
    this.goToPreviousSlide = this.goToPreviousSlide.bind(this);
    this.goToNextSlide = this.goToNextSlide.bind(this);
  }

  componentDidMount() {
    this.getSeededData();
  }

  // axios get request
  getSeededData() {
    axios.get('/api/more-places')
      .then((results) => results.data)
      // .then(result => console.log(result))
      .then((result) => this.setState({
        seededData: result,
      }))
      .catch(console.log);
  }

  // Go to Previous Slides
  goToPreviousSlide(event) {
    event.preventDefault();
    console.log(scroll);
    if (scroll === 0) {
      document.getElementById('test').style.transform = `translateX(${scroll - 2280}px)`;
      scroll = -2280;
      this.setState({ motion: scroll });
    }

    else if (scroll === -1140 || scroll === -2280) {
      document.getElementById('test').style.transform = `translateX(${scroll + 1140}px)`;
      scroll += 1140;
      this.setState({ motion: scroll });
    }
  }

  // Go To next slides
  goToNextSlide(event) {
    event.preventDefault();
    if (scroll === -2280) {
      document.getElementById('test').style.transform = `translateX(${scroll + 2280}px)`;
      scroll = 0;
      this.setState({ motion: scroll });
    }

    else if (scroll === -1140 || scroll === 0) {
      document.getElementById('test').style.transform = `translateX(${scroll - 1140}px)`;
      scroll -= 1140;
      this.setState({ motion: scroll });
    }
  }

  // Show Modal
  showModal(event) {
    event.preventDefault();
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  }

  render() {
    return (
      <ComponentWrapper>
        <div className="More-Places-App">
          <GlobalFonts />
          <HeaderWrapper>
            More Places To Stay
            <span>
              <Previous prevSlide={this.goToPreviousSlide} scroll={this.state.scroll} />
              <Next nextSlide={this.goToNextSlide} scroll={this.state.scroll} />
            </span>
          </HeaderWrapper>
          <Listing seededData={this.state.seededData} modal={this.showModal} />
        </div>
        <Modal show={this.state.show} onClose={this.showModal}></Modal>
      </ComponentWrapper>
    );
  }
}

export default App;

// /*
// .example::-webkit-scrollbar {
//   display: none;
// /* Hide scrollbar for Chrome, Safari and Opera */
// .example::-webkit-scrollbar {
//   display: none;
// }

// /* Hide scrollbar for IE, Edge and Firefox */
// .example {
//   -ms-overflow-style: none;  /* IE and Edge */
//   scrollbar-width: none;  /* Firefox */
// }
//  */
