import React from 'react';
import '../assets/styles/components/PostsSidebar.scss';
import menuIcon from '../assets/static/hamburguer-menu-icon.png';

class PostsSidebar extends React.Component {
  constructor(props) {
    super(props);
  }
  state = { sidebar: false, }

  handleClick = () => {
    this.setState({
      sidebar: !this.state.sidebar,
    })
  }

  render() {
    const { sidebar } = this.state;
    return(
      <section className={sidebar ? "postsSidebar active" : "postsSidebar"}>
        <h2 className="postsSidebar__title">Reddit Posts</h2>
        { this.props.children }
        <h3 className="postsSidebar__dismissAll">Dismiss All</h3>
        <img className="postsDetail__icon" src={ menuIcon } onClick={ this.handleClick } />
      </section>
    );
  };  
};

export default PostsSidebar;