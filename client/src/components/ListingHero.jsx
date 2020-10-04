/* eslint-disable no-trailing-spaces */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable react/jsx-wrap-multilines */
/* eslint-disable implicit-arrow-linebreak */
import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const element = <FontAwesomeIcon icon={faStar, faHeart} />;

const Image = styled.img`
  width: 265px;
  height: 177px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 10px;
  `;

const ListingWrapper = styled.div`
  display: flex;
  height: 100%;
  list-style: none;
  ${'' /* overflow: auto hidden; */}
  padding-right: 20px;
  margin-bottom: 20px;
  margin-top: 0px;
  width: 100%;
  scroll-snap-type: x mandatory;
  ${'' /* transform: translateX(-1500px); */}
  `;

const ReviewWrap = styled.span`
  font-size: 14px;
  line-height: 18px;
  `;

const TypeWrap = styled.span`
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  max-height: 20px;
  overflow: hidden;
  `;

const Describe = styled.div`
  width: 265px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const HeroPhotoWrap = styled.div`
  display: inline-flex;
  height: 100%;
  list-style: none;
  overflow: auto hidden;
  padding-left: 0px;
  margin-bottom: 0px;
  margin-top: 0px;
  min-width: 100%;
  object-fit: cover;
`;

const SuperRow = styled.span`
  display: inline-flex;
  position: absolute;
  overflow: hidden;
  padding: 8px;
  justify-content: space-between;
  width: 257px;
  align-items: baseline;
  object-fit: cover;
`;

const SuperHost = styled.div`
  position: relative;
  background: white;
  font-weight: 550;
  font-size: 12px;
  border-radius: 5px;
  overflow: auto hidden;
  padding: 5px;
  margin: 5px;
  background-color: rgba(255, 255, 255, 0.95);
  border: 0.5px solid rgba(0, 0, 0, 0.2);
  color: rgb(146, 23, 77);
  font-family: 'AirbnbCerealMedium';
`;

const Heart = styled.button`
  position: relative;
  font-weight: 550;
  font-size: 18px;
  border-radius: 5px;
  border: none !important;
  ${'' /* overflow: auto hidden;
  padding: 5px;
  margin-left: 5px;
  margin-right: 5px; */}
  background: transparent;
`;

class ListingHero extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isSaved: false,
    };
    // This Binding Area
    // this.handleClick = this.handleClick.bind(this);
    this.saveListing = this.saveListing.bind(this);
  }

  saveListing(event) {
    event.preventDefault();
    const { isSaved } = this.state;
    this.setState({
      isSaved: !isSaved,
    });
  }

  render() {
    // console.log(this.props);
    const { obj, show } = this.props;
    const { isSaved } = this.state;

    return (
      <ListingWrapper>
        <div className="entireListing">
          <div className="clickableArea">
            <HeroPhotoWrap>
              <Image src={obj.photo} alt="" />
              <SuperRow>
                {obj.label.superhost ? <SuperHost type="submit">SUPERHOST </SuperHost> : <div></div>}
                {isSaved ?
                  <Heart className="likeBtn" onClick={(e) => this.saveListing(e)}>
                  <svg viewBox="0 0 32 32" focusable="false" style={{display: 'block', fill: '#ff385c', height: '24px', width: '24px', stroke: 'rgb(255, 255, 255)', overflow: 'visible'}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" /></svg>
                </Heart> :
                <Heart className="likeBtn" onClick={(e) => this.saveListing(e)}>
                  <svg viewBox="0 0 32 32" focusable="false" style={{display: 'block', fill: 'rgba(0, 0, 0, 0.5)', height: '24px', width: '24px', stroke: 'rgb(255, 255, 255)', overflow: 'visible'}}><path d="m16 28c7-4.733 14-10 14-17 0-1.792-.683-3.583-2.05-4.95-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05l-2.051 2.051-2.05-2.051c-1.367-1.366-3.158-2.05-4.95-2.05-1.791 0-3.583.684-4.949 2.05-1.367 1.367-2.051 3.158-2.051 4.95 0 7 7 12.267 14 17z" /></svg>
                </Heart>}
              </SuperRow>
            </HeroPhotoWrap>
            <div>
              <ReviewWrap>
                <FontAwesomeIcon icon={faStar} color="#ff385c" width="6px" height="6px" />&nbsp;
                {obj.popularity.stars}&nbsp;
                ({obj.popularity.reviewCount})
              </ReviewWrap>
            </div>
            <TypeWrap> {obj.type} • {obj.beds} beds </TypeWrap>
            <Describe> {obj.description} </Describe>
          </div>
          <div> ${obj.rate} / night </div>
        </div>
      </ListingWrapper>
    );
  }
}

export default ListingHero;

// ======== REACTIVATE ONCE MODAL IN BETTER PLACE =========
  // handleClick() {
  //   alert('Click Functionality: Redirect to another Item Detail Page!');
  // }
  // ^^^
  //  "clickableArea" onClick={this.handleClick}
