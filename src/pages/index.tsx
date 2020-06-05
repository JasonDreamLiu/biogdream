import React , { useState } from 'react';
import styles from './index.less';

import { Layout, Breadcrumb } from 'antd';
const { Header, Footer, Sider, Content } = Layout;

import { Link } from 'umi';

export default (props : any) => {

  const [clickTrigger,setClickTrigger] = useState(true);

  const oncollapse = (collapsed : any, type : any) =>{
    setClickTrigger(collapsed);
  }
  console.log(props);
  return (
    <Layout className={styles.App}>
      <Header className={styles.header}>
        <div className={"logo"}></div>
        <Link to="/article">文章</Link>
        <Link to="/my">简介</Link>
      </Header>
      <Layout className={styles.main}>
        <Sider className={styles.sider}
                collapsible={true}
                defaultCollapsed={true}
                onCollapse={oncollapse}
        >
          左边
        </Sider>
        <Layout className={styles.right} style={clickTrigger?{marginLeft:"80px"}:{marginLeft:"200px"}}>
          <Content className={styles.content}>
            <Content className={styles.content_Main}>
              {props.children}
            </Content>
          </Content>
          <Footer className={styles.Footer}>下面</Footer>
        </Layout>
      </Layout>
    </Layout>
  );
}
