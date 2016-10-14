import React, {Component} from 'react';
import {connect} from 'react-redux';

class Add extends Component {
    render() {
        return (
            <div>
                <h3 className="title">
                    添加心愿
                </h3>
            </div>
        )
    }
}

const mapStateToProps = (state)=> {
    return {}
};

const mapDispatchToProps = (dispatch)=> {
    return {
        add: (newItem)=>dispatch({type: 'add', newItem})
    }
};

export default Add = connect(mapStateToProps, mapDispatchToProps)(Add);
