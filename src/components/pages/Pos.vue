<template>
  <div>
    <el-row>
      <el-col :span="7" class="pos-order" id="order-list">
        <el-tabs type="card">
          <el-tab-pane label="点餐">
            <el-table :data="tableData">
              <el-table-column
                align="center"
                prop="goodsName"
                label="商品名称"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="count"
                label="数量"
              ></el-table-column>
              <el-table-column
                align="center"
                prop="price"
                label="金额"
              ></el-table-column>
              <el-table-column align="center" fixed="right" label="操作">
                <!-- 这里取不到goodsName这些数据了，所以用下面这个方法，直接取当前行的数据，把button用template包裹起来，给它一个slot-scope="scope"属性。之后scope.row可以取到当前行的属性，直接放到方法里就可以用了 -->
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    size="small"
                    @click="addOrderList(scope.row)"
                    >添加</el-button
                  >
                  <el-button
                    type="text"
                    size="small"
                    @click="deleteSingleGoods(scope.row)"
                    >删除</el-button
                  >
                </template>
              </el-table-column>
            </el-table>
            <div class="statistics">
              <div>数量:{{ totalCount }}</div>
              <div>总金额:{{ totalMoney }}</div>
            </div>
            <div class="btn-box">
              <el-button type="primary">挂单</el-button>
              <el-button type="primary" @click="deleteAllGoods()"
                >删除</el-button
              >
              <el-button type="primary" @click="checkOut">结账</el-button>
            </div>
          </el-tab-pane>
          <el-tab-pane label="挂单">挂单</el-tab-pane>
          <el-tab-pane label="外卖">外卖</el-tab-pane>
        </el-tabs>
      </el-col>
      <el-col :span="17" class="pos-product" id="type-list">
        <div class="common-goods">
          <div class="title">常用商品</div>
          <div class="common-goods-list">
            <ul>
              <div class="common-goods-list-box">
                <li
                  v-for="item in commonGoods"
                  :key="item.goodsId"
                  @click="addOrderList(item)"
                >
                  <span>{{ item.goodsName }}</span>
                  <span class="c-price">￥{{ item.price }}元</span>
                </li>
              </div>
            </ul>
          </div>
        </div>
        <div class="goods-type">
          <el-tabs class="type-box" type="card">
            <el-tab-pane label="汉堡">
              <ul class="goods-list">
                <div class="goods-list-box">
                  <li
                    v-for="item in imgData"
                    :key="item.goodsId"
                    @click="addOrderList(item)"
                  >
                    <div class="foodImg">
                      <img :src="item.imgSrc" />
                    </div>
                    <div class="food-info">
                      <div>{{ item.goodsName }}</div>
                      <div>￥{{ item.price }}元</div>
                    </div>
                  </li>
                </div>
              </ul>
            </el-tab-pane>
            <el-tab-pane label="小食"> 小食 </el-tab-pane>
            <el-tab-pane label="饮料"> 饮料 </el-tab-pane>
            <el-tab-pane label="套餐"> 套餐 </el-tab-pane>
          </el-tabs>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'pos',
  data() {
    return {
      tableData: [],
      imgData: [
        {
          goodsId: 'a1',
          imgSrc: 'http://www.kfc.com.cn/kfccda/images/jy/2/thumb/1.jpg',
          goodsName: '脆鸡八分堡',
          price: '20'
        },
        {
          goodsId: 'a2',
          imgSrc: 'http://www.kfc.com.cn/kfccda/images/jy/2/thumb/2.jpg',
          goodsName: '香辣鸡腿堡',
          price: '20'
        },
        {
          goodsId: 'a3',
          imgSrc: 'http://www.kfc.com.cn/kfccda/images/jy/2/thumb/3.jpg',
          goodsName: '劲脆鸡腿堡',
          price: '20'
        },
        {
          goodsId: 'a4',
          imgSrc: 'http://www.kfc.com.cn/kfccda/images/jy/2/thumb/4.jpg',
          goodsName: '新奥尔良烤鸡腿堡',
          price: '20'
        },
        {
          goodsId: 'a5',
          imgSrc: 'http://www.kfc.com.cn/kfccda/images/jy/2/thumb/5.jpg',
          goodsName: '培根烤鸡腿堡',
          price: '20'
        },
        {
          goodsId: 'a6',
          imgSrc: 'http://www.kfc.com.cn/kfccda/images/jy/2/thumb/6.jpg',
          goodsName: 'BBQ手撕猪肉堡',
          price: '20'
        },
        {
          goodsId: 'a7',
          imgSrc: 'http://www.kfc.com.cn/kfccda/images/jy/2/thumb/7.jpg',
          goodsName: '伴鸡伴虾堡',
          price: '20'
        },
        {
          goodsId: 'a8',
          imgSrc: 'http://www.kfc.com.cn/kfccda/images/jy/2/thumb/8.jpg',
          goodsName: '老北京鸡肉卷',
          price: '20'
        },
        {
          goodsId: 'a9',
          imgSrc: 'http://www.kfc.com.cn/kfccda/images/jy/2/thumb/9.jpg',
          goodsName: '香辣鸡柳饭',
          price: '20'
        },
        {
          goodsId: 'a10',
          imgSrc: 'http://www.kfc.com.cn/kfccda/images/jy/2/thumb/10.jpg',
          goodsName: '新奥尔良烤鸡腿饭',
          price: '20'
        },
        {
          goodsId: 'a11',
          imgSrc: 'http://www.kfc.com.cn/kfccda/images/jy/2/thumb/11.jpg',
          goodsName: '香烤照烧鸡腿饭',
          price: '20'
        }
      ],
      commonGoods: [
        {
          goodsId: 1,
          goodsName: '香辣鸡腿堡',
          price: 18
        },
        {
          goodsId: 2,
          goodsName: '田园鸡腿堡',
          price: 15
        },
        {
          goodsId: 3,
          goodsName: '和风汉堡',
          price: 15
        },
        {
          goodsId: 4,
          goodsName: '快乐全家桶',
          price: 80
        },
        {
          goodsId: 5,
          goodsName: '脆皮炸鸡腿',
          price: 10
        },
        {
          goodsId: 6,
          goodsName: '魔法鸡块',
          price: 20
        },
        {
          goodsId: 7,
          goodsName: '可乐大杯',
          price: 10
        },
        {
          goodsId: 8,
          goodsName: '雪顶咖啡',
          price: 18
        },
        {
          goodsId: 9,
          goodsName: '大块鸡米花',
          price: 15
        },
        {
          goodsId: 20,
          goodsName: '香脆鸡柳',
          price: 17
        }
      ]
    }
  },
  methods: {
    addOrderList(item) {
      // 先判断订单栏是否有商品
      // 商品默认没有
      let hasItem = false
      // 去找订单栏里的商品，并匹配
      for (let i in this.tableData) {
        // 存在的条件是订单栏里的商品id和我点击的商品项目匹配
        if (this.tableData[i].goodsId === item.goodsId) {
          // 如果已存在，则更改商品的值为true
          hasItem = true
        }
      }
      // 根据判断的值继续编写业务逻辑
      if (hasItem) {
        // 如果订单存在，就改变商品数量
        // filter的回调函数不加 花括号{} 会自动返回当前遍历值;如果加了花括号 { } 那么就得加return把值返回出来
        let arr = this.tableData.filter((i) => i.goodsId === item.goodsId)
        arr[0].count++
      } else {
        // 如果订单不存在，就把商品加入到订单栏
        let newItem = {
          goodsId: item.goodsId,
          goodsName: item.goodsName,
          price: item.price,
          count: 1 // 默认加1个进来
        }
        // 然后把产品push到订单栏
        this.tableData.push(newItem)
      }
    },
    // 删除单品
    deleteSingleGoods(item) {
      // 把订单总表拿过来遍历，跟当前点击商品匹配，就给他减掉
      let arr = this.tableData.filter((o) => o.goodsId === item.goodsId)
      if (arr[0].count === 1) {
        // 如果只有数量只有一个，就直接把商品从订单里移除
        // 先去找要删除的这一项item，在订单总表里的下标
        let idx = this.tableData.indexOf(item)
        // 通过找到的下标，用splice把总表里的这一项移除掉
        this.tableData.splice(idx, 1)
      } else {
        arr[0].count--
      }
    },
    // 清空订单
    deleteAllGoods() {
      this.tableData = []
    },
    // 结账
    checkOut() {
      if (this.totalCount !== 0) {
        // 如果有商品
        // 向服务器发送请求什么的
        // 然后清空订单，弹窗提示
        this.tableData = []
        this.$message.success('结账成功') // 这个是element自带的弹窗
      } else {
        // 如果没有商品，弹窗提示
        this.$message.error('请添加商品')
      }
    }
  },
  computed: {
    // 从订单栏里拿已添加的商品做一个计算属性
    // 不用for循环，这里用forEach，简单一点，
    totalCount: function () {
      let count = 0
      this.tableData.forEach((element) => {
        count += element.count
      })
      return count
    },
    totalMoney: function () {
      let money = 0
      this.tableData.forEach((element) => {
        money += element.price * element.count
      })
      return money
    }
  },
  mounted() {
    function setHeight() {
      let height = document.body.clientHeight // clientHeight返回的是元素像素高度，这里返回body元素像素高度
      console.log(height)
      document.getElementById('order-list').style.height = height + 'px' // 这里记得加单位
      document.getElementById('type-list').style.height = height + 'px' // 这里记得加单位
    }
    setTimeout(setHeight, 1) // 不知道为啥取不到dom
  }
}
</script>

<style>
.statistics {
  display: flex;
  justify-content: center;
}
.statistics div {
  margin: 0 25px;
}
.goods-list-box {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
}
.foodImg img {
  width: 100px;
}
.food-info {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  margin: 0 25px;
  width: 128px;
}
.goods-list li {
  background-color: #fff;
  list-style: none;
  display: flex;
  margin: 10px 10px;
  cursor: pointer;
}

.btn-box {
  margin-top: 30px;
}
.title {
  height: 20px;
  border-bottom: 1px solid #d3dce6;
  background-color: #f9fafc;
  padding: 10px;
}
.common-goods-list ul li {
  width: 150px;
  list-style: none;
  border: 1px solid #e5e9f2;
  padding: 10px;
  margin: 5px;
  background-color: #fff;
  cursor: pointer;
}
.common-goods-list-box {
  display: flex;
  flex-wrap: wrap;
}
.c-price {
  color: #58b7ff;
}

/* 这里两个没有把高度固定，窗体被新增的元素无限扩容, 从而导致overflow-y:scroll不起作用 */
.common-goods {
  height: 23%;
}
.goods-type {
  height: 77%;
}

.pos-order,
.goods-type,
.common-goods {
  background-color: #fff;
  overflow-y: scroll;
}
</style>
