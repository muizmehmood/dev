import React from 'react';
import image1 from "../components/img/forest.jpg";
import image2 from "../components/img/agri.jpg";

const DualImageWithDescription = ({ image1Src, description1 , description2, image2Src }) => {
  return (
    <div style={styles.container}>
      <div style={styles.item}>
        <div style={styles.imageWrapper}>
          <img src={image1Src} alt="Image 1" style={styles.image} />
        </div>
        <div style={styles.description}>{description1}</div>
      </div>
      <div style={styles.item}>
        
        <div style={styles.description}>{description2}</div>
        <div style={styles.imageWrapper}>
          <img src={image2Src} alt="Image 2" style={styles.image} />
        </div>
      </div>
    </div>
  );
};

const styles = {
    container: {
      height:'1000px',
      display: 'flex',
      flexDirection: 'column', 
      justifyContent: 'center',
      alignItems: 'right',
    },
    item: {
      display: 'flex',
      alignItems: 'center',
     
    },
    imageWrapper: {
      flex: 1,
      display: 'flex', // Added to ensure the image takes its original dimensions
      justifyContent: 'right', // Center the image horizontally
      alignItems: 'center', // Center the image vertically
    },
    image: {
      maxWidth: '100%', 
      height: '375px', 
    },
    description: {
      flex: 1,
      padding: '20px',
    },
  };
  

const Image_with_Description = () => {
  return (
    <div>
      <h1>Dual Images with Descriptions</h1>
      <DualImageWithDescription
        image1Src={image1} 
        description1=" Forestry Services Limited was established in 1985 and is one of Ireland’s leading and largest private forestry management companies. Forestry Services Limited is the first and only private forestry company in the Republic of Ireland to achieve Dual Certification in Forest Management which the company received in July 2019. The FSL Group Scheme is Forest Stewardship Council® (FSC®) and The Programme for the Endorsement of Forest Certification (PEFC™) certified, issued by Soil Association Certification Ltd. "
        
        description2=" Forestry Services Limited was established in 1985 and is one of Ireland’s leading and largest private forestry management companies. Forestry Services Limited is the first and only private forestry company in the Republic of Ireland to achieve Dual Certification in Forest Management which the company received in July 2019. The FSL Group Scheme is Forest Stewardship Council® (FSC®) and The Programme for the Endorsement of Forest Certification (PEFC™) certified, issued by Soil Association Certification Ltd. "
        image2Src={image2} 
      />
    </div>
  );
};

export default Image_with_Description;
