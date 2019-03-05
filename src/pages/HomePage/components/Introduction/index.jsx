import React, { Component } from 'react';

export default class Introduction extends Component {
  static displayName = 'Introduction';

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container}>
        <h3 style={styles.title}>机构简介</h3>
        <p style={styles.desc}>
          信息工程学院宣传工作委员会是学院的宣传思想工作机构，面向全院师生开展宣传工作，主要承担学院的宣传工作和传媒任务。
        </p>
      </div>
    );
  }
}

const styles = {
  container: {
    width: '640px',
    margin: '0 auto',
    padding: '80px 0',
  },
  title: {
    color: 'rgba(0,0,0,0.8)',
    lineHeight: '38px',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: '40px',
    margin: '0 0 24px',
  },
  desc: {
    color: 'rgba(0,0,0,.6)',
    fontSize: '16px',
    lineHeight: '30px',
    align: 'center',
  },
};
