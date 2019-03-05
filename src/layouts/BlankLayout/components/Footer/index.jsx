import React from 'react';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

const Footer = () => {
  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <Row>
          <Col l="8">
            <h3 style={styles.title}>关于我们</h3>
            <div style={styles.nav}>
              <a style={styles.link}>申请制度</a>
              <a style={styles.link}>加入我们</a>
            </div>
          </Col>
          <Col l="8">
            <h3 style={styles.title}>关注</h3><h3 style={styles.title}>“岭师信息菌”</h3>
            <img
              src="https://ice.alicdn.com/assets/images/qrcode.png"
              alt="qr-code"
              style={styles.qrcode}
            />
          </Col>
          <Col l="8">
            <h3 style={styles.title}>关注</h3><h3 style={styles.title}>“信息工程学院”</h3>
            <img
              src="https://ice.alicdn.com/assets/images/qrcode.png"
              alt="qr-code"
              style={styles.qrcode}
            />
          </Col>
        </Row>
      </div>
      <p style={styles.copyRight}>宣传工作委员会 © {new Date().getFullYear()} 版权所有</p>
    </div>
  );
};

const styles = {
  container: {
    padding: '60px 0',
    background: '#475268',
    color: '#fff',
  },
  content: {
    width: '1200px',
    margin: '0 auto',
    paddingLeft: '100px',
  },
  title: {
    fontSize: '20px',
    fontWeight: '400',
    marginBottom: '20px',
  },
  link: {
    display: 'block',
    marginBottom: '20px',
    height: '22px',
    lineHeight: '22px',
    color: '#fff',
    cursor: 'pointer',
  },
  qrcode: {
    width: '160px',
    borderRadius: '4px',
  },
  copyRight: {
    paddingTop: '100px',
    textAlign: 'center',
    fontSize: '15px',
  },
};

export default Footer;
