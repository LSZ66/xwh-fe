import React, { Component } from 'react';
import { Grid } from '@alifd/next';

const { Row, Col } = Grid;

const dataSource = [
  {
    title: '新闻部',
    pic: 'https://img.lsznb.cn/images/news.png',
    desc: '新闻部主要负责记录学院的各项重要活动，传达重要指示，展现学院风采。作为学院的喉舌部门，我们始终以讲好学院故事，传播学院正能量为责任。拿上笔记本，戴上工作证，我们便开始奋斗在各项活动的第一线，用笔杆还原现场，用文字记录动人瞬间，还会邀请学院大神进行独家专访。',
  },
  {
    title: '摄影部',
    pic: 'https://img.lsznb.cn/images/camera.png',
    desc: '摄影部作为宣委会旗下的一个前线工作部门，主要的任务是负责拍摄学院宣传需要的照片及新闻配图。我们与相机为伴，奔走在各种活动现场及会议现场，通过照片定格住精彩的瞬间，通过视频记录下意义非凡的时刻。',
  },
  {
    title: '美工部',
    pic: 'https://img.lsznb.cn/images/draw.png',
    desc: '美工部的工作是以手绘海报、版头和黑板报等的形式来对每一项活动进行宣传，部门特色活动有“三笔字暨绘画大赛”。每一次任务，每一项活动，都是版面设计与色彩的碰撞，是创想与行动的摩擦，是责任与激情的抒发。',
  },
  {
    title: '秘书部',
    pic: 'https://img.lsznb.cn/images/paper.png',
    desc: '秘书部，主要肩负上传下达的工作职责：及时向各个部门传达各类文体活动所分配的任务，协调、配合各部门的工作及传达通知于宣传委员。日常工作为负责机构财务报账和管理、机构文书整理相关工作、后台申请回复、申请打印，彩印，教室，盖章等等。',
  },
  {
    title: '网络部',
    pic: 'https://img.lsznb.cn/images/video.png',
    desc: '网络部主要负责制作学院各大机构申请的各项活动和比赛的海报和视频，旨在通过用海报和视频让更多的人了解信息工程学院的学院特色与思想要求，并做好学院举办的各大活动和比赛的宣传工作。',
  },
  {
    title: '新宣部',
    pic: 'https://img.lsznb.cn/images/blog.png',
    desc: '新宣部，全称新媒体宣传部，主要职责为管理运营学院的两大公众号：“岭师信息菌”与“岭南师范学院信息工程学院”。日常工作包括素材的收集、文稿的排版以及公众号文章的推送，通过推送的文章以达到宣传的目的。',
  },
];

export default class Feature extends Component {
  static displayName = 'Feature';

  static propTypes = {};

  static defaultProps = {};

  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container}>
        <Row wrap style={styles.content}>
          {dataSource.map((item, index) => {
            return (
              <Col xxs="12" s="6" l="8" key={index} style={styles.item}>
                <img src={item.pic} style={styles.pic} alt="" />
                <h3 style={styles.title}>{item.title}</h3>
                <p style={styles.desc}>{item.desc}</p>
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}

const styles = {
  container: {
    padding: '80px 0',
    background: '#F6F7F9',
  },
  content: {
    width: '1200px',
    margin: '0 auto',
  },
  item: {
    textAlign: 'center',
    padding: '10px 20px',
  },
  pic: {
    width: '80px',
    marginBottom: '30px',
  },
  title: {
    fontWeight: 'bold',
  },
  desc: {
    lineHeight: '22px',
    color: '#999',
  },
};
