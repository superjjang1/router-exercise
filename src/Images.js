
import React, {Component} from 'react';


function Images(props){
	const atlImages = [
		'http://i.huffpost.com/gen/1716876/images/o-ATLANTA-TRAFFIC-facebook.jpg',
  'http://2.bp.blogspot.com/--XZFLg6LSq8/U4YV65sb2MI/AAAAAAAAO8A/cFl-Em5Zb0A/s1600/Sawfish_Atlanta_Aquarium.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/a/a3/Piedmont-park-urban-park.jpg'
	]
	const pleaseWork = atlImages.map(img=>
		<img src={img} alt='stuff' height='460' width='460'/>
	)
	return(
		pleaseWork
	)
}
 
export default Images;


