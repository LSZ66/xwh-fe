import React, { Component } from 'react';

export default class Solution extends Component {
  static displayName = 'Solution';

  constructor(props) {
    super(props);
    this.state = {};
  }

  static contact = () => {
    alert('调试中');
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.content}>
          <div style={styles.imgbox}>
            <img
              alt=""
              src="https://img.alicdn.com/tfs/TB1re2fvVOWBuNjy0FiXXXFxVXa-346-320.png_.webp"
              style={styles.img}
            />
          </div>
          <div style={styles.infobox}>
            <h3 style={styles.title}>联系我们</h3>
            <p style={styles.desc}>
              需要联系我们？请点击下方链接
            </p>
            <a onClick={Solution.contact} style={styles.link}>
              联系我们
            </a>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    backgroundImage: 'linear-gradient(-28deg, #3D42DA 0%, #3B91E4 100%)',
    color: '#fff',
    padding: '80px',
  },
  content: {
    width: '1200px',
    margin: '0 auto',
    display: 'flex',
  },
  imgbox: {
    textAlign: 'right',
    width: '50%',
    paddingRight: '60px',
  },
  img: {
    width: '172px',
  },
  infobox: {
    width: '60%',
    textAlign: 'left',
  },
  title: {
    lineHeight: '38px',
    fontWeight: 'bold',
    fontSize: '40px',
    margin: '0 0 24px',
  },
  desc: {
    fontSize: '14px',
    lineHeight: '30px',
    marginBottom: '20px',
  },
  link: {
    display: 'inline-block',
    border: '1px solid #fff',
    fontSize: '14px',
    width: '124px',
    height: '40px',
    lineHeight: '40px',
    color: 'rgba(31,56,88,0.6)',
    borderRadius: '18px',
    padding: '0 16px',
    backgroundColor: '#fff',
    textAlign: 'center',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};
