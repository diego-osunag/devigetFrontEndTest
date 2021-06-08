import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import ReactPaginate from 'react-paginate';
import { updatePageCount } from '../actions';
import PostsListItem from './PostsListItem';
import '../assets/styles/components/PostsList.scss';

class PostsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      offset: 0,
      perPage: 10,
      currentPage: 0,
    };
    this.handlePageClick = this
      .handlePageClick
      .bind(this);
  }

  handlePageClick = (page) => {
    const selectedPage = page.selected;
    const offset = selectedPage * this.props.perPage;

    this.setState({
      pageNumber: 0,
      currentPage: selectedPage,
      offset: offset,
    }, () => {
      this.props.updatePageCount(Math.ceil(this.props.postsList.length / this.props.perPage));
    });
  }

  componentDidMount() {
    this.timeout = setTimeout(() => {
      this.props.updatePageCount(Math.ceil(this.props.postsList.length / this.props.perPage));
    }, 800);
  }

  render() {
    return (
      <section className='postsList'>
        <ReactPaginate
          previousLabel='<'
          nextLabel='>'
          breakLabel='...'
          breakClassName='break-me'
          pageCount={this.props.pageCount}
          marginPagesDisplayed={0}
          pageRangeDisplayed={5}
          onPageChange={this.handlePageClick}
          forcePage={this.state.pageNumber}
          containerClassName='pagination'
          subContainerClassName='pages pagination'
          activeClassName='active'
        />
        <TransitionGroup component='div' className='postsList__container'>
          {this.props.postsList.slice(this.state.offset, this.state.offset + this.props.perPage).map((post) => (
            <CSSTransition key={post.id} timeout={100} classNames='item'>
              <PostsListItem key={post.id} {...post} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </section>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    postsList: state.postsList,
    pageCount: state.pageCount,
    perPage: state.perPage,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    updatePageCount: (number) => dispatch(updatePageCount(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostsList);
