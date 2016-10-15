import React, {Component} from 'react';
import {connect} from 'react-redux';

class List extends Component {
    handleRemove(item) {
        let result = confirm('您确定要删除吗？');
        if (result) {
            this.props.remove(item);
        }
    }

    handleFinished(item) {
        let result = confirm('您确定已完成吗？');
        if (result) {
            this.props.finish(item);
        }
    }


    render() {
        if(this.props.list.length == 0){
            return (
                <div id="list">
                    <h3 className="title">
                        心愿列表
                    </h3>
                </div>
            )
        }
        let total = 0;
        this.props.list.forEach(item=> {
            total += Number(item.price);
        });
        return (
            <div id="list">
                <h3 className="title">
                    心愿列表
                </h3>
                <div className="panel info">
                    <div className="panel-header">总计</div>
                    <div className="panel-body">
                        总共<strong>{this.props.list.length}</strong>个心愿
                    </div>
                    <div className="panel-footer">
                        完成心愿共需要<strong>{total}</strong>元
                    </div>
                </div>
                <ul>
                    {
                        this.props.list.map((item, index) => {
                            return (
                                <li key={index} className={`panel ${item.status}`}>
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
                                        <button className="btn btn-success"
                                                onClick={this.handleFinished.bind(this, item)}>
                                            已完成
                                        </button>
                                        <button className="btn btn-danger"
                                                onClick={this.handleRemove.bind(this, item)}>
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
List = connect(mapStateToProps, mapDispatchToProps)(List);
export default List;
