import React, {Component} from 'react';
import {connect} from 'react-redux';

class Add extends Component {
    handleSubmit(e) {
        e.preventDefault();
        let name = form.name.value,
            describe = form.describe.value,
            price = form.price.value,
            status = form.status.value;
        this.props.add({name, describe, price, status});
        this.context.router.push('/list');
    }

    render() {
        return (
            <div id="add">
                <h3 className="title">
                    添加心愿
                </h3>
                <form className="form" onSubmit={this.handleSubmit.bind(this)} name="form">
                    <div className="input-group">
                        <label htmlFor="name">心愿名称：</label>
                        <input required="required" id="name" name="name" type="text" className="input"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="describe">心愿描述：</label>
                        <input required="required" id="describe" name="describe" type="text" className="input"/>
                    </div>
                    <div className="input-group">
                        <label htmlFor="price">心愿价格：</label>
                        <input id="price" type="text" className="input" name="price"
                               required="required" pattern='^\d+(\.\d{1,2})?$' title="xx.xx"/>元
                    </div>
                    <div className="input-group">
                        <label>心愿状态：</label>
                        <select id="status" className="select" name="status">
                            <option value="normal">一般</option>
                            <option value="emerge">紧急</option>
                        </select>
                    </div>
                    <button type="submit" className="btn btn-success btn-center">
                        添加心愿
                    </button>
                </form>
            </div>
        )
    }
}

Add.contextTypes = {
    router: React.PropTypes.object
};

const mapStateToProps = (state)=> {
    return {}
};

const mapDispatchToProps = (dispatch)=> {
    return {
        add: (newItem)=>dispatch({type: 'add', newItem})
    }
};

export default Add = connect(mapStateToProps, mapDispatchToProps)(Add);
