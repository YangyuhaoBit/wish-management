import React, {Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';

class Nav extends Component {
    render() {
        return (
            <div>
                {this.props.children}
                <nav className="nav nav-bottom">
                    <ul>
                        <li className="nav-item">
                            <Link to="/list" activeClassName='active'>
                                <span className="icon icon-list"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/check" activeClassName='active'>
                                <span className="icon icon-check"></span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/add" activeClassName='active'>
                                <span className="icon icon-add"></span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}

const mapStateToProps = (state)=> {
    return {
        list: state.list,
        finished: state.finished
    }
};

export default Nav = connect(mapStateToProps)(Nav);
