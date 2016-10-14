import React, {Component} from 'react';
import {connect} from 'react-redux';

class Check extends Component {
    render() {
        return (
            <div>
                <h3 className="title">
                    已完成的心愿
                </h3>
                <ul>
                    {
                        this.props.finished.map((item, index)=> {
                            return (
                                <li key={index} className={`panel ${item.status}`}>
                                    <div className='panel-header'>
                                        {item.name}
                                    </div>
                                    <div className="panel-body">
                                        {item.describe}
                                    </div>
                                    <div className="panel-footer">
                                        <button className="btn btn-danger">
                                            删除
                                        </button>
                                    </div>
                                </li>
                            );
                        })
                    }
                </ul>

            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {
        finished: state.finished,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        remove: (removeItem)=>dispatch({type: 'remove', removeItem})
    }
};

export default Check = connect(mapStateToProps, mapDispatchToProps)(Check);
