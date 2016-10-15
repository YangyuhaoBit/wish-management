import React, {Component} from 'react';
import {connect} from 'react-redux';

class Check extends Component {
    handleRemove(item) {
        let result = confirm('您确定删除吗？');
        if (result) {
            this.props.remove(item);
        }
    }

    handleCancel(item) {
        let result = confirm('您确定取消完成吗？');
        if (result) {
            this.props.cancel(item);
        }
    }

    render() {
        if (this.props.finished.length == 0) {
            return (
                <div id="list">
                    <h3 className="title">
                        已完成的心愿
                    </h3>
                </div>
            )
        }
        let total = 0;
        this.props.finished.forEach(item=> {
            total += Number(item.price);
        });
        return (
            <div id="check">
                <h3 className="title">
                    已完成的心愿
                </h3>
                <div className="panel info">
                    <div className="panel-header">总计</div>
                    <div className="panel-body">
                        完成了<strong>{this.props.finished.length}</strong>个心愿
                    </div>
                    <div className="panel-footer">
                        完成心愿共花费了<strong>{total}</strong>元
                    </div>
                </div>
                <ul>
                    {
                        this.props.finished.map((item, index)=> {
                            return (
                                <li key={index} className='panel finished'>
                                    <div className='panel-header'>
                                        {item.name}
                                    </div>
                                    <div className="panel-body">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                描述：{item.describe}
                                            </li>
                                            <li className="list-group-item">
                                                价格：{item.price}元
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="panel-footer">
                                        <button className="btn btn-warning"
                                                onClick={this.handleCancel.bind(this, item)}>取消完成
                                        </button>
                                        <button className="btn btn-danger" onClick={this.handleRemove.bind(this, item)}>
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
        remove: (removeItem)=>dispatch({type: 'remove', removeItem}),
        cancel: (cancelItem)=>dispatch({type: 'cancel', cancelItem})
    }
};

export default Check = connect(mapStateToProps, mapDispatchToProps)(Check);
