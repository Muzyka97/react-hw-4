import styles from './image-gallery-item.module.css';
import PropTypes from 'prop-types';

const ImageGalleryItem = ({url, onClick}) => {
    return (
    <li onClick={onClick} className={styles.ImageGalleryItem}>
    <img className={styles.ImageGalleryItemImage} src={url} alt="photo"/>
    </li>)
}
export default ImageGalleryItem;

ImageGalleryItem.propTypes ={
    onClick: PropTypes.func,
    url: PropTypes.string,
};
