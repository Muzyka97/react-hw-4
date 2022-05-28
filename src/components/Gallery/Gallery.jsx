import { Component } from 'react';
import { searchImage } from 'services/image';

import styles from './gallery.module.css';

import Modal from '../../shared/Modal';
import Searchbar from '../Searchbar';
import ImageGallery from 'components/ImageGallery';
import Button from '../../shared/Button';

// import propTypes from 'prop-types';

class Gallery extends Component {
    state ={
        hits:[],
        loading: false,
        error: null,
        q: "",
        page: 1,
        isModalOpen: false,
        modalBody: {}
    }

    async componentDidUpdate( prevProps, prevState){
        const {q, page} = this.state

        if(q !== prevState.q || page > prevState.page){
            this.setState({
                loading: true,
                error: null,
            });
            try{
                const {hits, totalHits} = await searchImage(q, page);
                this.setState(prevState => {
                    return{
                    hits: [...prevState.hits, ...hits],
                        loading: false,
                        totalHits,
                    }
                })
                
            }catch (error){
                this.setState({
                    loading: false,
                    error: error.message
                })
            }
        }
    };

    setSearch = ({q}) =>{
        this.setState({
            q,
            page: 1,
            hits: [],
        })
    }
    loadMore = () => {
        this.setState(({page}) => {
            return {
                page: page + 1
            }
        })
    }
    showModal = (modalBody) => {
        this.setState({
            modalBody,
            isModalOpen: true,
            
        })
    }
    closeModal = () =>{
        this.setState({
            isModalOpen: false
        })
    }
    render(){
        const {loading, hits, isModalOpen, modalBody} =this.state;
        const {setSearch, loadMore, showModal, closeModal} = this;
        return(
            <div className={styles.appStyles}>
                <header className={styles.searchBarStyles}>
                    <Searchbar onSubmit={setSearch} />
                    {loading && <p>...loading</p>}
                </header>
                {Boolean(hits.length) && (<ImageGallery hits={hits} onClick={showModal}/>)}
                {!loading && Boolean(hits.length) &&
                (<div className={styles.btnContainer}>
                    <Button onClick={loadMore} text="Load more"/>
                    </div>)}
                    {isModalOpen && (
                        <Modal close={closeModal}>
                            <img src={modalBody} alt="big photo"/>
                        </Modal>
                    )}
            </div>
        )
    }
};
export default Gallery;

