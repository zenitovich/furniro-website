<template>
  <div class="shop">
      <div class="shop-header">
          <div class="shop-header__filter">
              <div class="shop-header__filter--likes"><img src="../assets/icons/likes.svg" class="shop__filter--likes-img" alt="likes"/></div>
              <div class="shop-header__filter--border"></div>
              <div class="shop-header__filter--results">32 results</div>
          </div>
          <div class="shop-header__sort">
              <div class="shop-header__sort--text"> Short by</div>
              <div class="shop-header__sort--input"><input type="text" placeholder="Default" class="shop__sort--input-input"></div>
          </div>
      </div>
      <div class="shop-footer">
          <div class="shop-footer__pagination">
              <div class="shop-footer__pagination--item">1</div>
              <div class="shop-footer__pagination--item">2</div>
              <div class="shop-footer__pagination--item">3</div>
              <div class="shop-footer__pagination--item">Next</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "shop-page",
  beforeCreate() {
    this.$route.meta.layout = "DefaultLayout"
  }
}
</script>

<style scoped>

</style>
