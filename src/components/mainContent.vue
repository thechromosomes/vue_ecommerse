<template>
<div id="appCard" v-loading.fullscreen.lock="fullscreenLoading">
    <el-row :gutter="20">
        <el-col :span="5" :offset="1" v-for="(item, index) in products" :key="index">
           <el-card>
            <img :src="item.image" style="height:400px; width:90% " class="card_image">
            <div>
                <span>{{item.name}}</span>
                <div class="bottom clearfix">
                <time class="time">Rs. {{ item.price }}</time>
                </div>
            </div>
            </el-card>
        </el-col>
    </el-row>
</div>
</template>

<script>

export default {
   components: {
  },

  data(){
    return {
        currentDate: new Date(),
        products:[],
        fullscreenLoading: false,
        pageCount: 20
    }
  },
  methods: {

    // lazy loading
    bottomVisible() {
        const scrollY = window.scrollY
        const visible = document.documentElement.clientHeight
        const pageHeight = document.documentElement.scrollHeight
        const bottomOfPage = visible + scrollY >= pageHeight
        return bottomOfPage || pageHeight < visible
      },

      fetchProducts(){
        // to fetch the data
        let url = `https://pim.wforwomanonline.com/pim/pimresponse.php/?service=category&store=1&url_key=top-wear-kurtas&page=1&count=${this.pageCount}&sort_by=&sort_dir=desc&filter=`
        this.fullscreenLoading = true
        axios
            .post(url)
            .then(response => {
              console.log(response.data)
              this.products = this.products.concat(response.data.result.products)
              this.fullscreenLoading = false
              this.pageCount=this.pageCount+20;
            })
            .catch(e => {
            console.log("error", e)
            alert("error")
        });
      }
  },

  mounted() {

    window.addEventListener('scroll', () => {
      this.bottom = this.bottomVisible()
        if(this.bottom==true){
          this.fetchProducts()
        }
    })
  },

   created() {
    this.fetchProducts()
  }
}
</script>

<style>
@import url("//unpkg.com/element-ui@2.14.1/lib/theme-chalk/index.css");
/* .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  } */
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    background-color: #f9fafc;
  }
  .el-card__body {
    padding: 0px !important;
}

.el-card {
  margin-bottom: 15px;
}

</style>
