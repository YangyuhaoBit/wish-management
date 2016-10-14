import React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component {
    render() {
        return (
            <div>
                <h3 className="title">
                    心愿列表
                </h3>
                <ul>
                    {
                        this.props.list.map((item,index) =>{
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
        list: state.list,
    }
};

const mapDispatchToProps = (dispatch)=> {
    return {
        finish: (finishItem)=>dispatch({type: 'finish', finishItem}),
        remove: (removeItem)=>dispatch({type: 'remove', removeItem})
    }
};

export default List = connect(mapStateToProps, mapDispatchToProps)(List);
