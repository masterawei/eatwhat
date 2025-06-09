Page({
  data: {
    y: 0,
    currentDate: 1, // 默认选中第二天（与示例图一致）,
    day: "",
    selectedDay: "",
    meal: "早餐",
    dates: [
      { day: '周一', date: '5/26' },
      { day: '周二', date: '5/27' },
      { day: '周三', date: '5/28' },
      { day: '周四', date: '5/29' },
      { day: '周五', date: '5/30' },
      { day: '周六', date: '5/31' },
      { day: '周日', date: '6/01' }
    ],
    currentMenuList: [],
    allMenuList:{},
    todayMenuList:{}
  },
  onReady() {
    const menu ={
      "5/27": {
        "早餐": [
          {
            "type": "免费汤",
            "name": "27号",
            "price": "免费元/份"
          },
          {
            "type": "冷菜",
            "name": "美极西葫芦",
            "price": "1.0元/份"
          },
          {
            "type": "冷菜",
            "name": "凉拌裙带菜",
            "price": "1.0元/份"
          }
        ],
        "午餐":[
          {
            "type": "饮料",
            "name": "哈密瓜",
            "price": "3.0元/份"
          },
          {
            "type": "饮料",
            "name": "橙宝100%果汁(桃汁)",
            "price": "6.5元/份"
          },
          {
            "type": "饮料",
            "name": "橙宝100%果汁(橙汁)",
            "price": "6.5元/份"
          }
        ],
        "晚餐": [
          {
            "type": "小锅菜、炒食特色类",
            "name": "泰汁回锅鱼木桶饭",
            "price": "18.0元/份"
          },
          {
            "type": "饮料",
            "name": "雀巢丝滑拿铁咖啡",
            "price": "5.5元/份"
          },
          {
            "type": "饮料",
            "name": "风味酸奶",
            "price": "5.0元/份"
          }
        ]

      },
      "5/26": {
        "早餐": [
          {
            "type": "冷菜",
            "name": "26号",
            "price": "1.0元/份"
          },
          {
            "type": "冷菜",
            "name": "榨菜拌腐皮",
            "price": "1.0元/份"
          },
          {
            "type": "小锅菜、炒食特色类",
            "name": "茶树菇排骨汤",
            "price": "10.0元/份"
          }
        ],
        "晚餐": [
          {
            "type": "小锅菜、炒食特色类",
            "name": "泰汁回锅鱼木桶饭",
            "price": "18.0元/份"
          },
          {
            "type": "饮料",
            "name": "雀巢丝滑拿铁咖啡",
            "price": "5.5元/份"
          },
          {
            "type": "饮料",
            "name": "风味酸奶",
            "price": "5.0元/份"
          }
        ],
        "午餐":[
          {
            "type": "饮料",
            "name": "哈密瓜",
            "price": "3.0元/份"
          },
          {
            "type": "饮料",
            "name": "橙宝100%果汁(桃汁)",
            "price": "6.5元/份"
          },
          {
            "type": "饮料",
            "name": "橙宝100%果汁(橙汁)",
            "price": "6.5元/份"
          }
        ]

      }, "5/28": {
        "早餐": [
          {
            "type": "冷菜",
            "name": "28号",
            "price": "1.0元/份"
          },
          {
            "type": "冷菜",
            "name": "榨菜拌腐皮",
            "price": "1.0元/份"
          },
          {
            "type": "小锅菜、炒食特色类",
            "name": "茶树菇排骨汤",
            "price": "10.0元/份"
          }
        ],
        "晚餐": [
          {
            "type": "小锅菜、炒食特色类",
            "name": "泰汁回锅鱼木桶饭",
            "price": "18.0元/份"
          },
          {
            "type": "饮料",
            "name": "雀巢丝滑拿铁咖啡",
            "price": "5.5元/份"
          },
          {
            "type": "饮料",
            "name": "风味酸奶",
            "price": "5.0元/份"
          }
        ],
        "午餐":[
          {
            "type": "饮料",
            "name": "哈密瓜",
            "price": "3.0元/份"
          },
          {
            "type": "饮料",
            "name": "橙宝100%果汁(桃汁)",
            "price": "6.5元/份"
          },
          {
            "type": "饮料",
            "name": "橙宝100%果汁(橙汁)",
            "price": "6.5元/份"
          }
        ]

      }
    }
    // 获取设备窗口高度，初始y居中
    const res = wx.getSystemInfoSync();
    const windowHeight = res.windowHeight;
    const today = `${new Date().getMonth() + 1}/${String(new Date().getDate()).padStart(2, '0')}`;
    console.log("今天是"+today)
    this.setData({
      y: windowHeight / 2 - 40, // 减去box高度的一半（80rpx ≈ 40px）
      day: today,
      allMenuList:menu,
      todayMenuList:menu[today],
      currentMenuList: menu[today][this.data.meal],
    });
    console.log(this.data.currentMenuList);
  },
  onChange(e) {
    // 实时更新 y 坐标
    this.setData({
      y: e.detail.y
    });
  },
  handleTap(e) {
    const text = e.currentTarget.dataset.text;
    //text的值为早餐 午餐 晚餐
    console.log('点击的文本是:', text);
    const menu =this.data.todayMenuList[text]
    console.log("todayMenu"+this.data.todayMenuList)
    console.log(this.data.todayMenuList)
    console.log("menu:" + menu);
    this.setData({
      meal: text,
      currentMenuList:menu
    })
    console.log(this.data.meal)
    // 这里你可以根据text做不同操作，比如：

  },
  switchDate(e) {
    const index = e.currentTarget.dataset.index;
    const selectedDate = this.data.dates.at(index)["date"];
    console.log("选中的日期是" + selectedDate);

    const menu = this.data.allMenuList[selectedDate] || {};

    this.setData({
      currentDate: index,
      selectedDay: selectedDate,
      todayMenuList: menu,
      currentMenuList: menu["早餐"] || [],
    });

    console.log(this.data.todayMenuList);
  }
});
