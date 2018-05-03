<template>
    <div>
        <div class="nav">
            <a v-for="(pathItem, index) in pathItems"
               :key="index"
               @click="handleClickItem(pathItem)">{{pathItem[displayProp]}}</a>
        </div>
        <ul class="list">
            <li v-for="(contentItem, index) in contentItems"
                :key="index"
                :enterable="isEnterable(contentItem)"
                @click="handleClickItem(contentItem)">
                <span class="left">{{contentItem[displayProp]}}</span>
                <span v-if="isEnterable(contentItem)" class="right"> > </span>
            </li>
        </ul>
    </div>
</template>
<script>

  export default {

    props: {
      initialPathItems: { type: Array },
      contentItems: { type: Array },
      isEnterable: { type: Function },
      displayProp: { type: String }
    },

    data() {
      return {
        pathItems: this.initialPathItems
      }
    },

    computed: {
    },

    created() {
    },

    methods: {
      handleClickItem(item) {
        if(item.type === 'employee') {
          this.$emit('on-choose-item', item)
        }
        else {
          //Handle path changes
          let pathIndex = this.pathItems.indexOf(item)
          if(pathIndex === -1) {
            this.pathItems.push(item)
          }
          else {
            this.pathItems.splice(pathIndex + 1)
          }
          //Emit event
          this.$emit('on-enter-item', item)
        }

      }
    }
  }
</script>

<style lang="sass" scoped>
    $disabledColor: gray;
    $enabledColor: #1e7eee;
    .nav {
        border-bottom: 1px solid gray;
        padding: 10px;
        line-height: 1.5em;
        a {
            color: $enabledColor;
            &:not(:last-child):hover {
                cursor: pointer;
            }
            &:last-child {
                color: $disabledColor;
            }
            &:not(:last-child):after {
                content: '>';
                color: $disabledColor;
                margin-left: 8px;
                margin-right: 8px;
            }
        }
    }
    ul.list {
        padding-left: 0;
        margin-top: 0;
        margin-bottom: 0;
        li {
            font-size: 1.2em;
            list-style: none;
            padding: 10px 5px 10px 5px;
            border-bottom: 1px solid gray;
            color: $disabledColor;
            &[enterable] {
                &:hover {
                    cursor: pointer;
                }
            }
            &:after {
                content: '.';
                height: 0;
                visibility: hidden;
                clear: both;
            }
        }
    }
    .left {
        float: left;
    }
    .right {
        float: right;
    }
</style>
