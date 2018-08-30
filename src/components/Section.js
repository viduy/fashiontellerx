import React from 'react';
import styled from 'styled-components';
import Wave from './Wave';

const SectionGroup = styled.div`
  position: absolute;
  background: url(${props => props.image});
  background-size: cover;
  height: 720px;
  display: grid;
  grid-template-rwos: 300px auto;
  grid-gap: 20px;

  @media (max-width: 640px) {
    height: 820px;
  }
`

const SectionLogo = styled.img`
  align-self: end;
  margin: 0 auto;
  width: 128px;
`

const SectionTitleGroup = styled.div`
  display: grid;
  grid-template-columns: 300px auto;
  margin: 0 40px;
  grid-gap: 20px;
  grid-template-rows: auto 100%;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`

const SectionTitle = styled.h3`
  color: white;
  font-size: 60px;
  margin: 0;
  line-height: 1.2;

  @media (max-width:720px) {
    font-size: 40px;
  }
`

const SectionText = styled.p`
  color: white;
`

const WaveTop = styled.div`
  position: absolute;
  width: 100%;
  top: -6px;
  transform: rotate(180deg);
`

const WaveBottom = styled.div`
  position: absolute;
  width: 100%;
  bottom: -6px;
`

class Section extends React.Component {
  render() {
    return(
      <SectionGroup image={this.props.image}>
        <WaveTop><Wave /></WaveTop>
        <WaveBottom><Wave /></WaveBottom>
        <SectionLogo src={this.props.logo} />
        <SectionTitleGroup>
          <SectionTitle>{this.props.title}</SectionTitle>
          <SectionText>{this.props.text}</SectionText>
        </SectionTitleGroup>
      </SectionGroup>
    )
  }
}

export default Section;