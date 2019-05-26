import React, {Component} from 'react';
import Post from './Post';


export default class Posts extends Component {
    render() {
        return (
            <div className="left">
                <Post alt="nature" src="https://s1.1zoom.ru/big3/573/351843-admin.jpg"/>
                <Post alt="nature" src="http://www.9skips.com/wp-content/uploads/2017/10/forests.jpg"/>
            </div>
        )
    }
}