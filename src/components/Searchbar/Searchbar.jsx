import { Component } from 'react';

import styles from './searchbar.module.css';

import PropTypes from 'prop-types';

class Searchbar extends Component {
state ={
    q: ""
}

handleChange = ({target}) =>{
    const { name, value} = target;
    this.setState({
        [name]:value
    })
};
handleSubmit= (e) => {
    e.preventDefault();
    this.props.onSubmit({...this.state});
    this.reset();
};
reset(){
    this.setState({
        q: ""
    })
};


render(){
    const {q} = this.state
    const {handleChange, handleSubmit} = this;

    return(
        <div >
    <form onSubmit={handleSubmit} className={styles.SearchForm }>
        <button type="submit" className={styles.SearchFormButton }>Search </button>
        <input
        name="q"
        value={q}
        onChange={handleChange}
        className={styles.SearchFormInput}
        type="text"
        autoComplete="off"
        autoFocus
        placeholder=""
        required
        />
    </form>
    </div>
    )
}
}
export default Searchbar;

Searchbar.propTypes ={
    onSubmit: PropTypes.func.isRequired
};