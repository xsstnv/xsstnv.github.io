import React from 'react';
import { withRouter } from 'react-router-dom';
import { Menu } from "antd";
import { menu } from '../../../demo/menu.config.js';

const { SubMenu } = Menu;

class MenuBuilder extends React.Component {

    state = {
        current: '/',
    };

    handleClick = e => {
        this.setState({ current: e.key });
        this.props.history.push(e.key);
    };

    render() {
        const { current } = this.state;

        return (
            <Menu
                onClick={this.handleClick}
                selectedKeys={[current]}
                mode={this.props.align}
            >
                {menu.map(item => {
                    
                    if (item.type === 'menuItem') {
                        return (
                            <Menu.Item key={item.label}>
                                {item.label}
                            </Menu.Item>
                        )
                    }

                    else if (item.type === 'subMenu') {
                        return (
                            <SubMenu title={item.label} key={item.label}>
                                {item.subMenu && item.subMenu.map(subItem => {

                                    if (subItem.type === 'menuItem') {
                                        return (
                                            <Menu.Item key={subItem.label}>
                                                {subItem.label}
                                            </Menu.Item>
                                        );
                                    }

                                    else if (subItem.type === 'menuGroup') {
                                        return (
                                            <Menu.ItemGroup key={subItem.label} title={subItem.label}>
                                                {subItem.group && subItem.group.map(groupItem => {
                                                    if (groupItem.type === 'menuItem') {
                                                        return (
                                                            <Menu.Item key={groupItem.label}>
                                                                {groupItem.label}
                                                            </Menu.Item>
                                                        );
                                                    }
                                                    else {
                                                        return null;
                                                    }
                                                })}
                                            </Menu.ItemGroup>
                                        );
                                    }
                                    else {
                                        return null;
                                    }
                                })}
                            </SubMenu>
                        );
                    }
                    else {
                        return null;
                    }
                })}
            </Menu>
        )
    }
}

export default withRouter(MenuBuilder);