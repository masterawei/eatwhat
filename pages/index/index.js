Page({
  data: {
    y: 0,
    currentDate: 1, // 默认选中第二天（与示例图一致）
    dates: [
      { day: '周一', date: '05/19' },
      { day: '周二', date: '05/20' },
      { day: '周三', date: '05/21' },
      { day: '周四', date: '05/22' },
      { day: '周五', date: '05/23' },
      { day: '周六', date: '05/24' },
      { day: '周日', date: '05/25' }
    ],
    menuList: [
      // 每天的菜单数据，二维数组
      [
        { type: '免费汤', name: '三片汤', price: '免费元/份' },
        { type: '冷菜', name: '美极西葫芦', price: '1.0元/份' },
        { type: '冷菜', name: '凉拌裙带菜', price: '1.0元/份' },
        { type: '冷菜', name: '烤萝卜干', price: '1.0元/份' },
        { type: '冷菜', name: '榨菜拌腐皮', price: '1.0元/份' },
        { type: '小锅菜、炒食特色类', name: '茶树菇排骨汤', price: '10.0元/份' },
        { type: '早餐', name: '老上海猪排', price: '8.0元/份' },
        { type: '午餐', name: '雪菜烧鸭米线砂锅', price: '10.0元/份' },
        { type: '午餐', name: '泰汁回锅鱼木桶饭', price: '18.0元/份' },
        { type: '饮料', name: '雀巢丝滑拿铁咖啡', price: '5.5元/份' },
        { type: '饮料', name: '风味酸奶', price: '5.0元/份' },
        { type: '饮料', name: '哈密瓜', price: '3.0元/份' },
        { type: '饮料', name: '橙宝100%果汁(桃汁)', price: '6.5元/份' },
        { type: '饮料', name: '橙宝100%果汁(橙汁)', price: '6.5元/份' }
      ],
      // 其他日期可复制或自定义
      [

        { type: '冷菜', name: '烤萝卜干', price: '1.0元/份' },
        { type: '冷菜', name: '榨菜拌腐皮', price: '1.0元/份' },
        { type: '小锅菜、炒食特色类', name: '茶树菇排骨汤', price: '10.0元/份' },
        { type: '早餐', name: '老上海猪排', price: '8.0元/份' },
        { type: '午餐', name: '雪菜烧鸭米线砂锅', price: '10.0元/份' }

      ],
      // 其他日期...可继续补充
      [], [], [], [], []
    ]
  },
  onReady() {
    // 获取设备窗口高度，初始y居中
    const res = wx.getSystemInfoSync();
    const windowHeight = res.windowHeight;
    this.setData({
      y: windowHeight / 2 - 40 // 减去box高度的一半（80rpx ≈ 40px）
    });
  },
  onChange(e) {
    // 实时更新 y 坐标
    this.setData({
      y: e.detail.y
    });
  },
  switchDate(e) {
    const index = e.currentTarget.dataset.index;
    this.setData({
      currentDate: index
    });
  }
});
