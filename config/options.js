// 配置文件
import { htmlEncode } from 'common/format';
import { catalog, coin, qq, qqzone, weibo } from 'static/svgs';
import MusicPlayer from 'components/MusicPlayer';
import DisplayImage from 'components/DisplayImage';
import Blogroll from 'components/Blogroll';
import { Link } from '@geist-ui/react';

/**
 * Blog Config 
 * - title:         博客标题
 * - desc:          博客描述
 * - avatar:        博客头像路径或url
 * - menu:          博客菜单
 *    - title:        菜单标题
 *    - outside:      站外链接(开启时，router中只有pathname生效)
 *    - router:       菜单router(请参考next.js文档)
 * - baseURL:       博客主页部署url
 * - recordNumber:  备案号 (如果不需要，请将值设置为null)
 * - background:    是否需要keyboard wrapper作为背景 (试验功能，未开发完毕)
 */
const BlogConfig = {
  title: "DeAnti",
  desc: "Same on the other side",
  avatar: "/static/avatar.jpg",
  menu: [
    {
      title: 'Home',
      // outside: true,
      router: {pathname: '/'}
    },{
      title: 'Article',
      router: {pathname: '/ArticleList'}
    },{
      title: 'Tags',
      router: {pathname: '/Tags'}
    },{
      title: 'About',
      router: {
        pathname: '/Article',
        query: {
          id: 0
        }
      }
    }
  ],
  baseURL: "http://deanti.wang",
  recordNumber: "鄂ICP备18004914号-2",
  background: false
};

/**
 * reactHtmlReplace Options
 */
const replaceTags = (tag, props) => {
  switch (tag) {
    case 'img':
      return <DisplayImage/>;
    case 'a':
      return <Link/>;
    case 'p': // TODO maybe delete
      return <div {...props}></div>;
    case 'MusicPlayer':
      return <MusicPlayer/>;
    case 'Blogroll':
      return <Blogroll/>;
    default:
  }
};

/**
 * xss options
 */
const xssOptions = {
  whiteList: {
    span: ["class"]
  }
};

/**
 * fetch BaseUrl
 */
const baseUrl = "http://deanti.wang/api/";

/**
 * debounce wait time (ms)
 */
const debounceWait = 450;

/**
 * Back-To-Top Component Options
 * - offset:    the scrollTop to open component
 */
const backTopOption = {
  offset: 50
};

/**
 * ArticleBar Default Options
 */
const ArticleBarOption = {
  normal: [
    // {
    //   icon: catalog,
    //   onClick: () => {
    //     this.setState({
    //       tocOpen: true
    //     })
    //   }
    // },
    {
      icon: coin,
      onClick: () => {
        // setSponsorModalVisible(true);
      }
    }
  ],
  share: [
    {
      icon: qq,
      onClick: () => {
        const url = htmlEncode(URL),
              title = htmlEncode(TITLE),
              summary = htmlEncode(SUMMARY),
              img = htmlEncode(IMG);

        let str = `https://connect.qq.com/widget/shareqq/index.html?url=${url}&title=${title}&summary=${summary}&pics=${img}`;
        window.open(str);
      }
    },
    {
      icon: qqzone,
      onClick: () => {
        const url = htmlEncode(URL),
          title = htmlEncode(TITLE),
          summary = htmlEncode(SUMMARY),
          img = htmlEncode(IMG);

        let str = `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url=${url}&title=${title}&desc=${summary}&summary=${summary}&pics=${img}`;
        window.open(str)
      }
    },
    {
      icon: weibo,
      onClick: () => {
        const url = htmlEncode(URL),
          desc = htmlEncode(SUMMARY),
          img = htmlEncode(IMG);

        let str = `http://service.weibo.com/share/mobile.php?url=${url}&title=${desc}&pic=${img}`;
        window.open(str);
      }
    }
  ]
};

export {
  BlogConfig,
  debounceWait,
  backTopOption,
  replaceTags,
  xssOptions,
  baseUrl,
  ArticleBarOption,
}