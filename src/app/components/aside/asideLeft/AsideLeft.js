/* eslint no-console: 0 */
import React, { PropTypes } from 'react';
import cx         from 'classnames';
import UserPanel  from './userPanel/UserPanel';
import SearchForm from './searchForm/SearchForm';
import Horloge    from '../../horloge/Horloge';
import Menu       from './menu/Menu';


const AsideLeft = (props) => {
  const {
    connectionStatus,
    userIsConnected,
    username,
    helloWord,
    userPicture,
    showPicture
  } = props;

  const {
    isAnimated,
    isCollapsed,
    currentView,
    sideMenu
  } = props;

  return (
    <aside className={
      cx({
        'no-print': true,
        'left-side': true,
        'aside-left--fixed': true,
        'sidebar-offcanvas': true,
        'sidebar-animated': isAnimated,
        'collapse-left':    isCollapsed
      })}
      // add overflow to left sidebar:
      style={{
        height: '100%',
        overflow: 'auto',
        position: 'fixed'
      }}>
        <section className="sidebar">
          <UserPanel
            hello={helloWord}
            username={username}
            connectionStatus={connectionStatus}
            online={userIsConnected}
            userPicture={userPicture}
            showUserPicture={showPicture}
          />
          <Horloge />

          <SearchForm
            onSearchSubmit={(value) => console.log('searching: ', value)}
          />

          {
            sideMenu.map(
              ({id, group, menus}, menuIdx) => {
                return (
                  <Menu
                    key={menuIdx}
                    headerTitle={group}
                    headerBackColor="#283744"
                    activeView={currentView}
                    views={menus}
                  />
                );
              }
            )
          }
{/*
          <ul className="sidebar-menu">
            <li className={currentView === 'Home' ? 'active' : '' }>
              <Link to="/">
                <i className="fa fa-dashboard"></i>
                <span>Dashboard</span>
              </Link>
            </li>
            <li className={currentView === 'General' ? 'active' : '' }>
              <Link
                to="/general">
                <i className="fa fa-gavel"></i>
                <span>General</span>
              </Link>
            </li>
            <li className={currentView === 'BasicElements' ? 'active' : '' }>
              <Link
                to="/basicElements">
                <i className="fa fa-globe"></i>
                <span>Basic Elements</span>
              </Link>
            </li>
            <li className={currentView === 'SimpleTables' ? 'active' : '' }>
              <Link
                to="/simpleTables">
                <i className="fa fa-glass"></i>
                <span>Simple tables</span>
              </Link>
            </li>
          </ul> */}
        </section>

    </aside>

  );
};

AsideLeft.propTypes = {
  isAnimated: PropTypes.bool,
  isCollapsed: PropTypes.bool,
  sideMenu: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      group: PropTypes.string.isRequired,
      menus: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          linkTo: PropTypes.string.isRequired,
          faIconName: PropTypes.string.isRequired
        })
      )
    })
  ).isRequired,
  currentView: PropTypes.string,
  connectionStatus: PropTypes.shape({
    online: PropTypes.string,
    disconnected: PropTypes.string
  }),
  userIsConnected: PropTypes.bool,
  username: PropTypes.string,
  userPicture: PropTypes.string,
  showPicture: PropTypes.bool,
  helloWord: PropTypes.string
};

AsideLeft.defaultProps = {
  isAnimated: false,
  isCollapsed: false
};

export default AsideLeft;
