var orgData = {
  '1g': {
    nodes: [{
        id: 1,
        shape: 'circularImage',
        label: '那伊抹微笑',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/nayimoweixiao.png'
      },
      {
        id: 2,
        shape: 'circularImage',
        label: '片刻',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/pianke.jpg'
      },
      {
        id: 3,
        shape: 'circularImage',
        label: '瑶妹',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/yaomei.jpg'
      },
      {
        id: 4,
        shape: 'circularImage',
        label: '飞龙',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/feilong.png'
      },
      {
        id: 5,
        shape: 'circularImage',
        label: '伪文艺',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/weiwenyi.jpg'
      }
    ],
    edges: [{
        from: 1,
        to: 3
      },
      {
        from: 1,
        to: 2
      },
      {
        from: 2,
        to: 4
      },
      {
        from: 2,
        to: 5
      }
    ]
  },
  '2g': {
    nodes: [{
        id: 1,
        shape: 'circularImage',
        label: '片刻',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/pianke.jpg'
      },
      {
        id: 2,
        shape: 'circularImage',
        label: '飞龙',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/feilong.png'
      },
      {
        id: 3,
        shape: 'circularImage',
        label: '伪文艺',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/weiwenyi.jpg'
      },
      {
        id: 4,
        shape: 'circularImage',
        label: '道长而崎',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/daochangerqi.jpg'
      },
      {
        id: 5,
        shape: 'circularImage',
        label: '小白二号',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 6,
        shape: 'circularImage',
        label: 'Lisanaaa',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/lisanaaa.jpg'
      },
      {
        id: 7,
        shape: 'circularImage',
        label: '荼靡',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/mixiaole1.jpg'
      },
      {
        id: 8,
        shape: 'circularImage',
        label: '临江仙卜算子',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/linjiangxianbusuanzi.png'
      },
      {
        id: 9,
        shape: 'circularImage',
        label: '怎么可以吃兔兔',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 10,
        shape: 'circularImage',
        label: '瑶妹',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/yaomei.jpg'
      }
    ],
    edges: [{
        from: 1,
        to: 3
      },
      {
        from: 1,
        to: 2
      },
      {
        from: 2,
        to: 4
      },
      {
        from: 2,
        to: 5
      },
      {
        from: 5,
        to: 7
      },
      {
        from: 6,
        to: 8
      },
      {
        from: 4,
        to: 10
      },
      {
        from: 3,
        to: 9
      },
      {
        from: 2,
        to: 8
      }
    ]
  }
}

var org_1g_tupu = document.getElementById('org-1g-tupu')
var org_2g_tupu = document.getElementById('org-2g-tupu')

function drawTupu(data, place) {
  var nodes = new vis.DataSet(data.nodes)
  var edges = new vis.DataSet(data.edges)
  var options = {
    autoResize: false,
    nodes: {
      // borderWidth: 4,
      // size: 40,
      color: {
        border: '#222',
        background: '#666'
      }
    },
    edges: {
      // color: '#fff'
    },
  };

  var network = new vis.Network(place, {
    nodes: nodes,
    edges: edges
  }, options);
}

drawTupu(orgData['1g'], org_1g_tupu)
drawTupu(orgData['2g'], org_2g_tupu)

///////////////////////////////////////////////////////////
var qqMLData = {
  '1g': {
    nodes: [{
        id: 1,
        shape: 'circularImage',
        label: '易漠',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 2,
        shape: 'circularImage',
        label: 'Mike',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/mike.png'
      },
      {
        id: 3,
        shape: 'circularImage',
        label: 'Books',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 4,
        shape: 'circularImage',
        label: '李孟禹',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 5,
        shape: 'circularImage',
        label: '张假飞',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 6,
        shape: 'circularImage',
        label: 'Glassy',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 7,
        shape: 'circularImage',
        label: '红色石头',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 8,
        shape: 'circularImage',
        label: '微光同尘',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      }
    ],
    edges: []
  },
  '2g': {
    nodes: [{
        id: 1,
        shape: 'circularImage',
        label: '张假飞',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 2,
        shape: 'circularImage',
        label: '李孟禹',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 3,
        shape: 'circularImage',
        label: '小明教主',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 4,
        shape: 'circularImage',
        label: '平淡的天',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 5,
        shape: 'circularImage',
        label: '凌少skierゞ',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 6,
        shape: 'circularImage',
        label: 'じ☆νЁ坐看云起',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 7,
        shape: 'circularImage',
        label: '古柳-DesertsX',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 8,
        shape: 'circularImage',
        label: 'woodchuck',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 9,
        shape: 'circularImage',
        label: '自由精灵',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 10,
        shape: 'circularImage',
        label: '楚盟',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 11,
        shape: 'circularImage',
        label: '99杆清台',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 12,
        shape: 'circularImage',
        label: '时空守望者',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 13,
        shape: 'circularImage',
        label: '只想发论文的渣渣',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 14,
        shape: 'circularImage',
        label: '目标: ml劝退专家',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      }
    ],
    edges: []
  },
  '3g': {
    nodes: [{
        id: 1,
        shape: 'circularImage',
        label: '只会喊666的存在',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 2,
        shape: 'circularImage',
        label: 'codefun007.xyz',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 3,
        shape: 'circularImage',
        label: '荼靡',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 4,
        shape: 'circularImage',
        label: '大鱼',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 5,
        shape: 'circularImage',
        label: '青鸟',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 6,
        shape: 'circularImage',
        label: '古柳-DesertsX',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 7,
        shape: 'circularImage',
        label: 'Edge',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 8,
        shape: 'circularImage',
        label: 'Alluka',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 9,
        shape: 'circularImage',
        label: 'Alluka',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 10,
        shape: 'circularImage',
        label: 'Alluka',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 11,
        shape: 'circularImage',
        label: 'Bigjing',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 12,
        shape: 'circularImage',
        label: '仁 礼 智 爱',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 13,
        shape: 'circularImage',
        label: '可啪的小乖受',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 14,
        shape: 'circularImage',
        label: '老古董',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 15,
        shape: 'circularImage',
        label: '时空守望者',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 16,
        shape: 'circularImage',
        label: '我好菜啊',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 17,
        shape: 'circularImage',
        label: 'Messi 19',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      }
    ],
    edges: []
  }
}

var qqKaggleData = {
  '1g': {
    nodes: [{
        id: 1,
        shape: 'circularImage',
        label: '诺木人',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 2,
        shape: 'circularImage',
        label: '刘玉刚',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 3,
        shape: 'circularImage',
        label: '风风',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 4,
        shape: 'circularImage',
        label: 'OneDay',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 5,
        shape: 'circularImage',
        label: '土豆🥔',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 6,
        shape: 'circularImage',
        label: 'X',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 7,
        shape: 'circularImage',
        label: '——',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 8,
        shape: 'circularImage',
        label: '.',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      },
      {
        id: 9,
        shape: 'circularImage',
        label: '余洋',
        image: 'https://www.ibooker.org.cn/wp-content/themes/ibooker/img/green_hat.jpg'
      }
    ],
    edges: []
  }
}

var qq_ml_1g_tupu = document.getElementById('qq-ml-1g-tupu')
var qq_ml_2g_tupu = document.getElementById('qq-ml-2g-tupu')
var qq_ml_3g_tupu = document.getElementById('qq-ml-3g-tupu')
var qq_kaggle_1g_tupu = document.getElementById('qq-kaggle-1g-tupu')

drawTupu(qqMLData['1g'], qq_ml_1g_tupu)
drawTupu(qqMLData['2g'], qq_ml_2g_tupu)
drawTupu(qqMLData['3g'], qq_ml_3g_tupu)
drawTupu(qqKaggleData['1g'], qq_kaggle_1g_tupu)

// 贡献者列表
var contributorsTable = new Vue({
  el: '#contributors-table',
  data: {
    items: [{
        no: 169,
        name: '浅紫色',
        qq: '250159924',
        credits: 750,
        remainCredits: 0,
        createdAt: '2018-05-21',
        updatedAt: '2018-05-28',
        comments: 'kaggle 数字识别第6期 辅助负责人'
      },
      {
        no: 168,
        name: 'HeChi®',
        qq: '361974980',
        credits: 700,
        remainCredits: 0,
        createdAt: '2018-05-16',
        updatedAt: '2018-05-16',
        comments: 'kaggle 泰坦尼克号第1期 技术负责人'
      },
      {
        no: 168,
        name: 'BrianCai',
        qq: '1974310692',
        credits: 730,
        remainCredits: 0,
        createdAt: '2018-05-16',
        updatedAt: '2018-06-01',
        comments: 'kaggle 房价预测第2期 辅助负责人 '
      },
      {
        no: 167,
        name: '嘿！漆漆',
        qq: '1104042157',
        credits: 730,
        remainCredits: 0,
        createdAt: '2018-05-16',
        updatedAt: '2018-06-01',
        comments: 'kaggle 房价预测第2期 辅助负责人 '
      },
      {
        no: 166,
        name: '张凯',
        qq: '51759864',
        credits: 100,
        remainCredits: 100,
        createdAt: '2018-05-09',
        updatedAt: '2018-05-09',
        comments: 'kaggle 数字识别第3期 辅助负责人 '
      },
      {
        no: 165,
        name: '平淡的天',
        qq: '554650680',
        credits: 1600,
        remainCredits: 0,
        createdAt: '2018-05-09',
        updatedAt: '2018-05-28',
        comments: 'kaggle 数字识别第6期 技术负责人'
      },
      {
        no: 164,
        name: 'Jason',
        qq: '184071217',
        credits: 3,
        remainCredits: 3,
        createdAt: '2018-04-09',
        updatedAt: '2018-04-09',
        comments: 'PyTorch 社区首页单词有误'
      },
      {
        no: 163,
        name: 'Lisanaaa',
        qq: '1369342903',
        credits: 280,
        remainCredits: 0,
        createdAt: '2018-04-28',
        updatedAt: '2018-04-28',
        comments: 'kaggle 泰坦尼克号第1期 辅助负责人'
      },
      {
        no: 162,
        name: '春不寒',
        qq: '1003324213',
        credits: 250,
        remainCredits: 200,
        createdAt: '2018-04-28',
        updatedAt: '2018-05-16',
        comments: '捐赠项目: <a href="https://github.com/apachecn/python_data_analysis_and_mining_action" target="_blank">python_data_analysis_and_mining_action</a>'
      },
      {
        no: 161,
        name: '咸鱼',
        qq: '1034616238',
        credits: 200,
        remainCredits: 200,
        createdAt: '2018-04-28',
        updatedAt: '2018-04-28',
        comments: 'Pytorch 0.3 .0 和 0.4 .0 负责人'
      },
      {
        no: 160,
        name: 'twinkle',
        qq: '1097078987',
        credits: 150,
        remainCredits: 150,
        createdAt: '2018-04-28',
        updatedAt: '2018-04-28',
        comments: 'Pytorch 0.3 .0 热心贡献者和 0.4 .0 负责人'
      },
      {
        no: 159,
        name: '飞龙',
        qq: '562826179',
        credits: 400,
        remainCredits: 300,
        createdAt: '2018-04-28',
        updatedAt: '2018-05-04',
        comments: 'Pytorch和hands on..负责人'
      },
      {
        no: 158,
        name: 'Roman',
        qq: '642159746',
        credits: 100,
        remainCredits: 100,
        createdAt: '2018-04-26',
        updatedAt: '2018-04-26',
        comments: '大数据 + 机器学习文档贡献'
      },
      {
        no: 157,
        name: 'n[o]ne',
        qq: '953645648',
        credits: 32,
        remainCredits: 32,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文教程翻译'
      },
      {
        no: 156,
        name: '艾 莉 夏ᵂ♪',
        qq: '1991336815',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 155,
        name: '沙场秋点兵',
        qq: '840361748',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 154,
        name: '(*^__^*) 嘻嘻',
        qq: '1756146605',
        credits: 60,
        remainCredits: 60,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 153,
        name: '钟情表述',
        qq: '772605287',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 152,
        name: '之茗',
        qq: '1312186883',
        credits: 20,
        remainCredits: 20,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 151,
        name: '一川.史塔克',
        qq: '2993376081',
        credits: 60,
        remainCredits: 60,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 150,
        name: '叶子',
        qq: '173492659',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 149,
        name: 'Lielei',
        qq: '1249756978',
        credits: 60,
        remainCredits: 60,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 148,
        name: '小于',
        qq: '1952284157',
        credits: 80,
        remainCredits: 80,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 147,
        name: '小伙子',
        qq: '1002913727',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 146,
        name: '晰',
        qq: '846570805',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 145,
        name: '卧床不起',
        qq: '305039198',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 144,
        name: '埃斯佩朗莎',
        qq: '931327503',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 143,
        name: '顺顺',
        qq: '1823518889',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 142,
        name: '深蓝总舵主',
        qq: '1042999860',
        credits: 100,
        remainCredits: 100,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 141,
        name: '云飞',
        qq: '3062984605',
        credits: 20,
        remainCredits: 20,
        createdAt: '2018-03-09',
        createdAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 140,
        name: 'Eadral',
        qq: '250014238',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        createdAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 139,
        name: '赖鸿昌',
        qq: '610395649',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        createdAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 138,
        name: '灵素',
        qq: '1031469724',
        credits: 12,
        remainCredits: 12,
        createdAt: '2018-03-09',
        createdAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 137,
        name: '思雨',
        qq: '1036014410',
        credits: 20,
        remainCredits: 20,
        createdAt: '2018-03-09',
        createdAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 136,
        name: 'mushroom',
        qq: '757786288',
        credits: 16,
        remainCredits: 16,
        createdAt: '2018-03-09',
        createdAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 135,
        name: 'Lam',
        qq: '244435514',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        createdAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 134,
        name: '一九九三的冬天',
        qq: '942206846',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        createdAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 133,
        name: '一半兑一半',
        qq: '376817601',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        createdAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 132,
        name: 'Starx',
        qq: '1027142104',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        createdAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 131,
        name: '爱远方',
        qq: '1010027161',
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        createdAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 130,
        name: 'Call Name',
        qq: '1057647539',
        credits: 120,
        remainCredits: 12,
        createdAt: '2018-03-09',
        createdAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 129,
        name: 'sawyer',
        qq: 1789199491,
        credits: 80,
        remainCredits: 80,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 128,
        name: '再造红旗',
        qq: 935694983,
        credits: 80,
        remainCredits: 80,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 127,
        name: 'K',
        qq: 417836426,
        credits: 80,
        remainCredits: 80,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 126,
        name: '会吐泡的鱼D126',
        qq: 410783353,
        credits: 16,
        remainCredits: 16,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 125,
        name: '潮汐之子',
        qq: 421202501,
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 124,
        name: '陈大鬼',
        qq: 254457260,
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 123,
        name: 'huangye',
        qq: 1993326686,
        credits: 88,
        remainCredits: 88,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'LightGBM, PyTorch'
      },
      {
        no: 122,
        name: '。。。',
        qq: 648167364,
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'LightGBM 中文文档翻译'
      },
      {
        no: 121,
        name: '午昏',
        qq: 1141714971,
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'LightGBM 中文文档翻译'
      },
      {
        no: 120,
        name: '计划生育老头头',
        qq: 737701995,
        credits: 44,
        remainCredits: 44,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'LightGBM, PyTorch'
      },
      {
        no: 119,
        name: '冯斐',
        link: 'http://cwiki.apachecn.org/display/~fengfei',
        qq: 452607965,
        credits: 80,
        remainCredits: 80,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'LightGBM, PyTorch'
      },
      {
        no: 118,
        name: '臧艺',
        qq: 379991171,
        credits: 80,
        remainCredits: 80,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'LightGBM, PyTorch'
      },
      {
        no: 117,
        name: '延年',
        qq: 402124496,
        credits: 80,
        remainCredits: 8,
        createdAt: '2018-03-09',
        updatedAt: '2018-05-14',
        comments: 'LightGBM, PyTorch'
      },
      {
        no: 116,
        name: '路人',
        qq: 1431793998,
        credits: 40,
        remainCredits: 40,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'LightGBM 中文文档翻译'
      },
      {
        no: 115,
        name: 'coco',
        link: 'http://cwiki.apachecn.org/display/~wulantian',
        qq: 120890945,
        credits: 2,
        remainCredits: 2,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'scikit - learn 中文文档推广'
      },
      {
        no: 114,
        name: 'hushiwei',
        link: 'http://cwiki.apachecn.org/display/~hushiwei',
        qq: 694244330,
        credits: 2,
        remainCredits: 2,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'scikit - learn 中文文档推广'
      },
      {
        no: 113,
        name: '韩博文',
        link: 'http://cwiki.apachecn.org/display/~hanbowen',
        qq: 1271814532,
        credits: 3,
        remainCredits: 3,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'scikit - learn 中文文档推广'
      },
      {
        no: 112,
        name: 'queryor',
        link: 'http://cwiki.apachecn.org/display/~qinyongjie',
        qq: 764280675,
        credits: 7,
        remainCredits: 7,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'scikit - learn 中文文档推广'
      },
      {
        no: 111,
        name: '七月扶风',
        link: 'http://cwiki.apachecn.org/display/~quefukun',
        qq: 790800680,
        credits: 7,
        remainCredits: 7,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'scikit - learn 中文文档推广'
      },
      {
        no: 110,
        name: '柯弈弦',
        link: 'http://cwiki.apachecn.org/display/~keyixian',
        qq: 690276884,
        credits: 55,
        remainCredits: 55,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'scikit - learn 中文文档推广'
      },
      {
        no: 109,
        name: '蚂蚁',
        link: 'http://cwiki.apachecn.org/display/~andi',
        qq: 71825415,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'scikit - learn 中文文档推广'
      },
      {
        no: 108,
        name: 'shna',
        link: 'http://cwiki.apachecn.org/display/~xiezhimin',
        qq: 1023473504,
        credits: 127,
        remainCredits: 127,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'Scikit - Learn, PyTorch'
      },
      {
        no: 107,
        name: '琴剑蓝天',
        link: 'http://cwiki.apachecn.org/display/~xujie',
        qq: 450172223,
        credits: 175,
        remainCredits: 175,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: '中文文档推广， 翻译， 等等'
      },
      {
        no: 106,
        name: '李强',
        link: 'http://cwiki.apachecn.org/display/~liqiang',
        qq: 763967420,
        credits: 55,
        remainCredits: 55,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'scikit - learn 中文文档推广'
      },
      {
        no: 105,
        name: 'geekidentity',
        link: 'http://cwiki.apachecn.org/display/~houfachao',
        qq: 1490401567,
        credits: 55,
        remainCredits: 55,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'scikit - learn 中文文档推广'
      },
      {
        no: 104,
        name: '小美哥',
        link: 'http://cwiki.apachecn.org/display/~gaoyimei',
        qq: 424410028,
        credits: 55,
        remainCredits: 55,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'scikit - learn 中文文档推广'
      },
      {
        no: 103,
        name: '夕舞雪薇',
        link: 'http://cwiki.apachecn.org/display/~fangzhenying',
        qq: 1294228487,
        credits: 179,
        remainCredits: 179,
        createdAt: '2018-03-09',
        updatedAt: '2018-03-09',
        comments: 'scikit - learn, lightgbm'
      },
      {
        no: 102,
        name: '–',
        qq: 429489455,
        credits: 42,
        remainCredits: 42,
        createdAt: '2018-01-24',
        updatedAt: '2018-01-24',
        comments: 'CWiki, PyTorch'
      },
      {
        no: 101,
        name: 'AquaVII',
        link: 'http://cwiki.apachecn.org/display/~y282879021',
        qq: 282879021,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 100,
        name: '徐继涛',
        link: 'http://cwiki.apachecn.org/display/~1021644861',
        qq: 1021644861,
        credits: 30,
        remainCredits: 30,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 99,
        name: '徐清瑶',
        link: 'http://cwiki.apachecn.org/display/~xuqingyao',
        qq: 1242403114,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 98,
        name: 'chenzehui',
        link: 'http://cwiki.apachecn.org/display/~chenzehui',
        qq: 672604803,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 97,
        name: '李博伦',
        qq: 1227329144,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 96,
        name: '杨衢',
        qq: 492058308,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 95,
        name: '蒋亨',
        link: 'http://cwiki.apachecn.org/display/~jiangheng',
        qq: 646107970,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 94,
        name: 'guobei',
        link: 'http://cwiki.apachecn.org/display/~1013216139',
        qq: 1013216139,
        credits: 30,
        remainCredits: 30,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 93,
        name: '屋檐听雨',
        link: 'http://cwiki.apachecn.org/display/~jingtao',
        qq: 844300439,
        credits: 70,
        remainCredits: 70,
        createdAt: '2018-01-19',
        updatedAt: '2018-03-09',
        comments: 'kaggle 热心贡献者, Scikit - Learn 推广'
      },
      {
        no: 92,
        name: '吃着狗粮的电酱PRPR',
        link: 'http://cwiki.apachecn.org/display/~yangxiaohang',
        qq: 278090621,
        credits: 70,
        remainCredits: 70,
        createdAt: '2018-01-19',
        updatedAt: '2018-03-09',
        comments: 'kaggle 热心贡献者, Scikit - Learn 推广'
      },
      {
        no: 91,
        name: '~守护',
        link: 'http://cwiki.apachecn.org/display/~libingchao',
        qq: 594599620,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 90,
        name: 'Yukine',
        link: 'http://cwiki.apachecn.org/display/~duweirudolf',
        qq: 1846029588,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 89,
        name: '谈笑风生',
        link: 'http://cwiki.apachecn.org/display/~zhujianyu',
        qq: 1040028623,
        credits: 70,
        remainCredits: 70,
        createdAt: '2018-01-19',
        updatedAt: '2018-03-09',
        comments: 'kaggle, Scikit - Learn, PyTorch'
      },
      {
        no: 88,
        name: '成飘飘',
        link: 'http://cwiki.apachecn.org/display/~chengpiaopiao',
        qq: 605097807,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 87,
        name: '小王子',
        link: 'http://cwiki.apachecn.org/display/~wangdehong',
        qq: 934969547,
        credits: 130,
        remainCredits: 130,
        createdAt: '2018-01-19',
        updatedAt: '2018-03-09',
        comments: 'kaggle, Scikit - Learn, PyTorch'
      },
      {
        no: 86,
        name: '刘海飞',
        link: 'http://cwiki.apachecn.org/display/~liuhaifei',
        qq: 1049498972,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 85,
        name: '李铭哲',
        link: 'http://cwiki.apachecn.org/display/~540886656',
        qq: 540886656,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 84,
        name: '风风',
        link: 'http://cwiki.apachecn.org/display/~tangzhiping',
        qq: 1277504591,
        credits: 100,
        remainCredits: 100,
        createdAt: '2018-01-19',
        updatedAt: '2018-03-09',
        comments: 'kaggle 热心贡献者, Scikit - Learn 推广'
      },
      {
        no: 83,
        name: '诺木人',
        link: 'http://cwiki.apachecn.org/display/~liudong',
        qq: 498744838,
        credits: 2915,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-06-01',
        comments: 'kaggle 房价预测第2期 技术负责人'
      },
      {
        no: 82,
        name: '马小穆',
        link: 'http://cwiki.apachecn.org/display/~magang',
        qq: 1690368280,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 81,
        name: '赵明',
        link: 'http://cwiki.apachecn.org/display/~zhaoming',
        qq: 517549275,
        credits: 15,
        remainCredits: 15,
        createdAt: '2018-01-19',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 80,
        name: '余额不足',
        qq: 1714004716,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-12-12',
        updatedAt: '2017-12-12',
        comments: '增加记录'
      },
      {
        no: 79,
        name: '一期一会',
        qq: 1843107737,
        credits: 5,
        remainCredits: 5,
        createdAt: '2017-12-06',
        updatedAt: '2017-12-06',
        comments: 'Spark Streaming 2.2 .0 翻译部分有问题'
      },
      {
        no: 78,
        name: '糖分°',
        qq: 870811589,
        credits: -10,
        remainCredits: -10,
        createdAt: '2017-12-04',
        updatedAt: '2017-12-04',
        comments: '云梯服务1月'
      },
      {
        no: 77,
        name: 'Nevermore',
        qq: 841169871,
        credits: -100,
        remainCredits: -100,
        createdAt: '2017-12-04',
        updatedAt: '2018-01-04',
        comments: '云梯服务1月'
      },
      {
        no: 76,
        name: 'Sun',
        qq: 243430851,
        credits: 100,
        remainCredits: 0,
        createdAt: '2017-12-04',
        updatedAt: '2018-01-04',
        comments: '云梯服务1月'
      },
      {
        no: 75,
        name: 'BBruceyuan',
        qq: 1346969468,
        credits: 5,
        remainCredits: 5,
        createdAt: '2017-11-29',
        updatedAt: '2017-11-29',
        comments: 'python - 3.6 pep8 code style'
      },
      {
        no: 74,
        name: '蓝色飞扬',
        qq: 249429497,
        credits: 60,
        remainCredits: 60,
        createdAt: '2017-11-23',
        updatedAt: '2018-03-09',
        comments: 'Elasticsearch Search APIs 顺序问题'
      },
      {
        no: 73,
        name: '污剑客',
        qq: 1342346797,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 72,
        name: 'Mysry',
        qq: 2845668308,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 71,
        name: '微光同尘',
        qq: 529925688,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 70,
        name: 'if only',
        qq: 630546915,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 69,
        name: '正版乔',
        qq: 897173568,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 68,
        name: '飓风',
        qq: 409880097,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 67,
        name: '樊雯',
        qq: 627940933,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 66,
        name: '想和太阳肩并肩',
        qq: 937714569,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 65,
        name: '不将就',
        qq: 277539102,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 64,
        name: 'png',
        qq: 565751115,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 63,
        name: '武器大师一个挑俩',
        qq: 1016974898,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 62,
        name: 'judy',
        qq: 404420265,
        credits: 180,
        remainCredits: 180,
        createdAt: '2017-11-14',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 61,
        name: '糖分°',
        qq: 870811589,
        credits: 100,
        remainCredits: 0,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 60,
        name: '花开无声',
        qq: 1570068374,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 59,
        name: 'Shao Y.',
        qq: 497249127,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 58,
        name: '张俊皓',
        link: 'http://cwiki.apachecn.org/display/~zhangjunhao',
        qq: 714974242,
        credits: 190,
        remainCredits: 190,
        createdAt: '2017-11-14',
        updatedAt: '2018-03-09',
        comments: 'kaggle 热心贡献者, Scikit - Learn 推广'
      },
      {
        no: 57,
        name: '曲晓峰',
        qq: 35007732,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 56,
        name: '大魔王飞仙',
        qq: 459848476,
        credits: 100,
        remainCredits: 155,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 55,
        name: '皮卡乒的皮卡乓',
        link: 'http://cwiki.apachecn.org/display/~zhangyizhen',
        qq: 501194716,
        credits: 115,
        remainCredits: 115,
        createdAt: '2017-11-14',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 54,
        name: 'Kyrie',
        qq: 525429239,
        credits: 120,
        remainCredits: 20,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 53,
        name: '舞空',
        qq: 564466679,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 52,
        name: '【子浪】',
        qq: 158200717,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 51,
        name: '维',
        qq: 807191330,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 50,
        name: '不吃曲奇的趣多多',
        qq: 892438725,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 49,
        name: 'numpy',
        qq: 598546998,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 48,
        name: 'Gladiator',
        link: 'http://cwiki.apachecn.org/display/~Gladiator17',
        qq: 1359651422,
        credits: 115,
        remainCredits: 115,
        createdAt: '2017-11-14',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 47,
        name: '专业吹牛逼的小明',
        qq: 940315187,
        credits: 120,
        remainCredits: 120,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 46,
        name: 'STAN,废柴0.1',
        qq: 879852715,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 45,
        name: '金四少',
        link: 'http://cwiki.apachecn.org/display/~chengtsung_liu',
        qq: 1376438704,
        credits: 160,
        remainCredits: 160,
        createdAt: '2017-11-14',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 44,
        name: 'scqs',
        qq: 1695976960,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 43,
        name: '巴黎灬メの雨季',
        qq: 1418804686,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 42,
        name: '李孟禹',
        qq: 396370321,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 41,
        name: 'Lielei',
        qq: 1249756978,
        credits: 100,
        remainCredits: 0,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 40,
        name: 'X',
        qq: 815928754,
        credits: 100,
        remainCredits: 0,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 39,
        name: '森系',
        qq: 752481828,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 38,
        name: '冰块',
        qq: 38261758,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 37,
        name: '…',
        qq: 542703630,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 36,
        name: 'ゞFingヤ',
        qq: 119998861,
        credits: 160,
        remainCredits: 160,
        createdAt: '2017-11-14',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文教程翻译'
      },
      {
        no: 35,
        name: 'Sun',
        qq: 243430851,
        credits: 100,
        remainCredits: 50,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 34,
        name: 'peels',
        qq: 1319396280,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 33,
        name: 'cowboy',
        qq: 346138605,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 32,
        name: '十四号',
        qq: 448467334,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 31,
        name: 'Trembleguy',
        qq: 872993797,
        credits: 120,
        remainCredits: 120,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 30,
        name: 'Sehriff',
        qq: 1360496507,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 29,
        name: 'kngines',
        qq: 1553608002,
        credits: 115,
        remainCredits: 115,
        createdAt: '2017-11-14',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 28,
        name: '夜神月',
        qq: 760514101,
        credits: 140,
        remainCredits: 40,
        createdAt: '2017-11-14',
        updatedAt: '2018-03-09',
        comments: 'PyTorch 中文文档翻译'
      },
      {
        no: 27,
        name: '柠檬',
        qq: 31718479,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 26,
        name: '程威',
        link: 'http://cwiki.apachecn.org/display/~chengwei',
        qq: 842725815,
        credits: 135,
        remainCredits: 135,
        createdAt: '2017-11-14',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 25,
        name: 'krokyin',
        qq: 469436477,
        credits: 120,
        remainCredits: 120,
        createdAt: '2017-11-14',
        updatedAt: '2018-03-09',
        comments: ''
      },
      {
        no: 24,
        name: '羊三',
        qq: 747033643,
        credits: 107,
        remainCredits: 107,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: 'Scikit - Learn 推广'
      },
      {
        no: 23,
        name: 'A',
        qq: 906192853,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 22,
        name: 'v',
        qq: 572874946,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 21,
        name: 't9UhoI',
        qq: 1275460343,
        credits: 120,
        remainCredits: 120,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 20,
        name: '文谊',
        qq: 1244058349,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 19,
        name: 'StupidStalker',
        qq: 840887944,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 18,
        name: 'I Remember',
        qq: 421947349,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 17,
        name: 'TWITCH',
        qq: 996514515,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 16,
        name: 'AI追寻者',
        qq: 568173272,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 15,
        name: 'mingsquall',
        qq: 774166816,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 14,
        name: 'L',
        qq: 734813219,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 13,
        name: 'Leon晋',
        qq: 1844886175,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 12,
        name: 'Damon',
        qq: 376159177,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 11,
        name: 'Counting stars',
        qq: 454819063,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 10,
        name: 'FAME',
        qq: 505684821,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 9,
        name: 'BWM-蜜蜂',
        qq: 2669307546,
        credits: 140,
        remainCredits: 140,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: 'LightGBM 中文文档翻译'
      },
      {
        no: 8,
        name: 'Hazekiah',
        qq: 1470468661,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 7,
        name: '年纪大了反应慢了',
        link: 'http://cwiki.apachecn.org/display/~xumingsheng',
        qq: 2269571067,
        credits: 115,
        remainCredits: 115,
        createdAt: '2017-11-14',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 6,
        name: '瓜牛',
        qq: 497668682,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 5,
        name: '李昊伟',
        qq: 906782061,
        credits: 100,
        remainCredits: 100,
        createdAt: '2017-11-14',
        updatedAt: '2017-11-14',
        comments: ''
      },
      {
        no: 4,
        name: 'glassy',
        link: 'http://cwiki.apachecn.org/display/~wuhaiyan',
        qq: 704289013,
        credits: 115,
        remainCredits: 115,
        createdAt: '2017-11-14',
        updatedAt: '2018-01-19',
        comments: 'kaggle 热心贡献者'
      },
      {
        no: 3,
        name: '小瑶',
        link: 'http://cwiki.apachecn.org/display/~chenyao',
        qq: 190442212,
        credits: 365,
        remainCredits: 365,
        createdAt: '2017-11-14',
        updatedAt: '2018-03-09',
        comments: ''
      },
      {
        no: 2,
        name: '片刻',
        link: 'http://cwiki.apachecn.org/display/~jiangzhonglian',
        qq: 529815144,
        credits: 275,
        remainCredits: 275,
        createdAt: '2017-11-14',
        updatedAt: '2018-03-09',
        comments: ''
      },
      {
        no: 1,
        name: '那伊抹微笑',
        link: 'http://cwiki.apachecn.org/display/~wangyangting',
        qq: 1042658081,
        credits: 399,
        remainCredits: 399,
        createdAt: '2017-11-14',
        updatedAt: '2018-03-09',
        comments: ''
      }
    ]
  }
})
