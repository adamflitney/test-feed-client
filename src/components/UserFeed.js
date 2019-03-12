import React, { Component } from 'react';
import './UserFeed.css';

import getUserFeed from '../api/userFeed';

class UserFeed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            notificationCount: 0,
            notifications: null,
            isOpen: false
        };

    }
    container = React.createRef();

    handleButtonClick = () => {
        this.setState(state => {
            return {
                isOpen: !state.isOpen
            }
        });
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
        getUserFeed()
            .then(result => {
                this.setState(state => {
                    return {
                        notifications: result
                    }
                })
            });
    }

    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                isOpen: false,
            });
        }
    }

   renderNotifications(notificationType) {
       let notificationGroup;
       let actionMessage;
       if(notificationType === 'likes'){
            notificationGroup = 'likesByPost';
            actionMessage = 'liked';
       } else if(notificationType === 'comments'){
            notificationGroup = 'commentsByPost';
            actionMessage = 'commented on';
       }
       else {
           return;
       }
        const notifications = this.state.notifications[notificationGroup].map(notification => {
                let remaining = notification.items.length - 2;
                return (
                    <div className="notification" key={notification.id}>
                        <span className="names">
                        {
                            notification.items.length > 1 ? 
                            `${notification.items[0].user.name || 'User'}, ${notification.items[1].user.name || 'User'} `
                            : `${notification.items[0].user.name || 'User'} `
                        }
                        </span>
                        <span className="message">
                            {
                                notification.items.length > 2 ?
                                `and ${remaining} ${remaining > 1 ? 'others' : 'other'} ${actionMessage} your post: `
                                : `${actionMessage} your post: `
                            }
                        </span>
                        <span className="postTitle">
                            {notification.title}
                        </span>
                    </div>
                );

        });
        return notifications;
    } 

    renderAllNotifications() {
        return (
            <div className="notifications">
                {this.renderNotifications('likes')}
                {this.renderNotifications('comments')}
            </div>
            
        )
    }

    render() {
        return (
            <div className="container" ref={this.container}>
                <div className="feed-button" onClick={this.handleButtonClick}>
                
                    <svg className="bell" viewBox="0 0 1000 1000" height="40" width="40">
                        <metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata>
                        <g>
                            <path fill="#eee" d="M481.6,671.7C366.1,713.4,285.9,761.1,234.1,804c36.5,32.3,105,40.2,173.2,15.6c86.9-31.4,140.3-103.4,119.1-160.8c-0.2-0.7-0.6-1.3-0.9-2C511.3,661.3,496.7,666.3,481.6,671.7L481.6,671.7z M552.6,865.1c-220.8,79.7-402.2,32.8-410,12c-13.2-36,71.3-155.9,323.7-247.1c252.4-91.2,393.3-57.3,408-17.2C883.1,636.6,773.4,785.4,552.6,865.1L552.6,865.1z M764.5,417.7C634.8,146,567.5,42.9,355.4,47.1C280,48.7,298.1-6.1,240.7,14.7c-57.6,20.8-8.2,51.2-67,98.1C8.5,244.7,23.7,366.7,100.3,657.5C132.6,780,22.6,786,66.1,904.8c31.8,86.6,266.2,122.8,513.4,33.5C826.6,849,982.7,671.8,950.9,585.2C907.4,466.5,819.2,532,764.5,417.7L764.5,417.7z" />
                        </g>
                    </svg>
                </div>
                {
                    this.state.notifications ?
                    <div className="number-badge"> <span>{this.state.notifications.commentsByPost.length + this.state.notifications.likesByPost.length}</span></div>
                    : false
                }
                {this.state.isOpen &&
                    <div className="feed-list">
                       {this.state.notifications ? this.renderAllNotifications() : false}
                    </div>
                }

            </div>
        )
    }
}

export default UserFeed;