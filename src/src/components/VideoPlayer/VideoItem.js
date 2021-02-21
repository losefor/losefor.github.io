import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircle,
  faPlayCircle,
} from "@fortawesome/free-solid-svg-icons";
import View from "../View";


export default function VideoItem({img , title , selectedVideo , _id }) {
    return (
        <div className='video-item'>

            <View mh={.5}>
            <FontAwesomeIcon
             size='2x' 
             icon={selectedVideo == _id ? faPlayCircle :faCircle }
             color='gray'
             />           
            </View>
            <img className='video-item__img' src={img}/>
            <p className='video-item__title'>{title}</p>
        </div>
    )
}
