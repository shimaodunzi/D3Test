<template>
  <el-menu
    router
    :default-active="defaultActive"
    class="el-menu-vertical-demo"
    :default-openeds="defaultOpeneds"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
  >
    <el-submenu
      :index="item.index"
      v-for="(item, index) in muneList"
      :key="index"
    >
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>{{ item.name }}</span>
      </template>
      <el-menu-item
        v-for="(key, index) in item.children"
        :key="index"
        :index="key.index"
        >{{ key.name }}</el-menu-item
      >
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  name: "muneList",
  data() {
    return {
      activeIndex: "",
      isCollapse: true,
      muneList: [],
      otherMenuList: [],
      chartMenuList: [],
      defaultActive: "",
      defaultOpeneds: []
    };
  },
  created() {
    this.muneList = this.updateMenuFromRouter();
    this.activeByRouter();
  },
  methods: {
    //根据路由配置自动更新菜单
    updateMenuFromRouter() {
      let routerList = this.$router.options.routes.filter(
        item => item.path !== "/"
      );
      let list = routerList.map(item => {
        return {
          name: item.meta.title,
          index: item.path,
          children: item.children.map(key => {
            return {
              name: key.meta.title,
              index: item.path + "/" + key.path
            };
          })
        };
      });
      return list;
    },
    //根据路由自动选择
    activeByRouter() {
      this.muneList.forEach(item => {
        item.children.forEach(key => {
          if (key.index === this.$route.fullPath) {
            this.defaultActive = key.index;
            this.defaultOpeneds.push(item.index);
          }
        });
      });
    }
  }
};
</script>

<style scoped>
.el-menu {
  height: 100%;
}
</style>
