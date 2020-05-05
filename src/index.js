import React from 'react';
import ReactDOM from 'react-dom';
import Faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

var App = () => {
    return (
        <div className="ui container comments">
            <ApprovalCard>
                <SimpleTextComponent />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Vancea"
                    timeAgo="Today at 8AM"
                    comment="React is Easy!"
                    image={Faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Radu"
                    timeAgo="Yesterday at 3AM"
                    comment="No way man!"
                    image={Faker.image.avatar()} />
            </ApprovalCard>
            <ApprovalCard>
                <CommentDetail
                    author="Ovidiu"
                    timeAgo="Today at 2AM"
                    comment="Aham!"
                    image={Faker.image.avatar()} />
            </ApprovalCard>
        </div >
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));

function SimpleTextComponent() {
    return <div>Are you sure you want to continue?</div>
}

function nonReusableComponent() {
    return (
        <div>
            {/*Postarea 1*/}
            < div className="comment" >
                <a href="/" className="avatar">
                    <img alt="avatar" src={Faker.image.avatar()} />
                </a>


                <div className="content">
                    <a href="/" className="author">
                        {Faker.name.firstName(1)}
                    </a>
                    <div className="metadata">
                        <span className="date">Yesterday</span>
                    </div>
                    <div className="Text ">{Faker.random.words(3)}</div>
                </div>

                {/*Postarea 2*/}
                < div className="comment" >
                    <a href="/" className="avatar">
                        <img alt="avatar" src={Faker.image.avatar()} />
                    </a>
                </div >

                <div className="content">
                    <a href="/" className="author">
                        {Faker.name.firstName(1)}
                    </a>
                    <div className="metadata">
                        <span className="date">Yesterday</span>
                    </div>
                    <div className="Text ">{Faker.random.words(3)}</div>
                </div>


                {/*Postarea 3*/}
                <div className="comment">
                    <a href="/" className="avatar">
                        <img alt="avatar" src={Faker.image.avatar()} />
                    </a>
                </div>

                <div className="content">
                    <a href="/" className="author">
                        {Faker.name.firstName(1)}
                    </a>
                    <div className="metadata">
                        <span className="date">Yesterday</span>
                    </div>
                    <div className="Text ">Commented: {Faker.random.words(3)}</div>
                </div>
            </div>
        </div>

    );
}

