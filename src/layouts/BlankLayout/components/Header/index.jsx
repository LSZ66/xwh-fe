import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import styles from './index.module.scss';

export default class Header extends Component {
  static displayName = 'Header';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link to="/" className={styles.logoLink}>
            宣委会
          </Link>
        </div>
        <ul className={styles.nav}>
          <li className={styles.navItem}>
            <Link to="/" className={styles.activeNavItemLink}>
              首页
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}
