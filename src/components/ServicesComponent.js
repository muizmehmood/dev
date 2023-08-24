import React from 'react';
import bgimage from '../components/img/bg_image.jpg';
import image1 from '../components/img/image1.jpg';
import image2 from '../components/img/image2.jpg';
import image3 from '../components/img/image3.jpg';
import image4 from '../components/img/image4.jpg';
import image5 from '../components/img/image5.jpg';
import image6 from '../components/img/image6.jpg';


const ServicesComponent = () => {
  const containerStyle = {
    backgroundImage: `url(${bgimage})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'repeat',
    height: '100%',
    overflow: 'auto',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const sectionStyle = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '20px',
  };

  const imageStyle = {
    width: '250px',
    height: '250px',
    borderRadius: '50%',
    margin: '10px',
  };

  const descriptionStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    borderRadius: '10px',
    width: '300px',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)',
  };

  const headingStyle = {
    marginTop: '0',
  };

  const textStyle = {
    marginBottom: '0',
  };

  return (
    <div style={containerStyle}>
      <div style={sectionStyle}>
        <img style={imageStyle} src={image1} alt="Image 1" />
        <div style={descriptionStyle}>
          <h2 style={headingStyle}>Forestry</h2>
          <p style={textStyle}>Forestry scenario models are sometimes defined as computerized models used to make long-term projections of forest resources over a large geographical region (from a couple of hundred hectares to global level). They may be referred to as timber inventory projection models, timber supply models, timber assessment models, or long-term strategic planning tools.

Forestry scenario models cover natural processes of forests as well as management activities. There are different ways to classify forestry scenario models. A common classification is based on the forest growth prediction method (yield tables, stand models, or individual-tree models). Another classification distinguishes timber assessment and timber supply prediction models. Timber assessment models illustrate the effects of different harvest levels on the forest. Timber supply models predict supply, taking into account the forest structure and growth as well as the expected harvest.</p>
        </div>
        <img style={imageStyle} src={image2} alt="Image 2" />
      </div>

      <div style={sectionStyle}>
        <img style={imageStyle} src={image3} alt="Image 3" />
        <div style={descriptionStyle}>
          <h2 style={headingStyle}>Blue Carbon</h2>
          <p style={textStyle}>Forestry scenario models are sometimes defined as computerized models used to make long-term projections of forest resources over a large geographical region (from a couple of hundred hectares to global level). They may be referred to as timber inventory projection models, timber supply models, timber assessment models, or long-term strategic planning tools.

Forestry scenario models cover natural processes of forests as well as management activities. There are different ways to classify forestry scenario models. A common classification is based on the forest growth prediction method (yield tables, stand models, or individual-tree models). Another classification distinguishes timber assessment and timber supply prediction models. Timber assessment models illustrate the effects of different harvest levels on the forest. Timber supply models predict supply, taking into account the forest structure and growth as well as the expected harvest.</p>
        </div>
        <img style={imageStyle} src={image4} alt="Image 4" />
      </div>

      <div style={sectionStyle}>
        <img style={imageStyle} src={image5} alt="Image 5" />
        <div style={descriptionStyle}>
          <h2 style={headingStyle}>Agricultue</h2>
          <p style={textStyle}>Forestry scenario models are sometimes defined as computerized models used to make long-term projections of forest resources over a large geographical region (from a couple of hundred hectares to global level). They may be referred to as timber inventory projection models, timber supply models, timber assessment models, or long-term strategic planning tools.

Forestry scenario models cover natural processes of forests as well as management activities. There are different ways to classify forestry scenario models. A common classification is based on the forest growth prediction method (yield tables, stand models, or individual-tree models). Another classification distinguishes timber assessment and timber supply prediction models. Timber assessment models illustrate the effects of different harvest levels on the forest. Timber supply models predict supply, taking into account the forest structure and growth as well as the expected harvest.</p>
        </div>
        <img style={imageStyle} src={image6} alt="Image 6" />
      </div>
    </div>
  );
};

export default ServicesComponent;
