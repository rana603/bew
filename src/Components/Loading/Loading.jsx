import React from "react";
import styles from "./Style.module.css";



const Loading = () => {
  return (
  
    <div style={{ marginTop:"0px", backgroundColor:"#fff"}} >

      <div   className={styles.loadingCSS} >
     
        <img
          width="150px" height="150px"
          src="https://images.bewakoof.com/web/bwkf-loading-anim-common.gif"
          alt="loading..."
          />
      </div>
   </div>
    
  );
};

export default Loading;
