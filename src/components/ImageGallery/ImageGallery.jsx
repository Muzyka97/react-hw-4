import styles from './image-gallery.module.css';
import ImageGalleryItem from './ImageGalleryItem';
import PropTypes from 'prop-types';

const ImageGallery = ({hits, onClick}) =>{
    const elements = hits.map(({id, webformatURL, largeImageURL}) =>(
        <ImageGalleryItem 
        onClick={()=> onClick(largeImageURL) }
        key={id}
        url={webformatURL}
        />
    ));

    return(
    <ul className={styles.ImageGallery}>
        {elements}
    </ul>
    )
};
export default ImageGallery;

ImageGallery.defaultProps={
    hits: []
}

ImageGallery.defaultProps ={
hits: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    webformatURL: PropTypes.string.isRequired,
}))
}
