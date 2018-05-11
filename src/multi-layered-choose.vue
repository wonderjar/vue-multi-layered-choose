<template>
    <div>
        <div class="nav">
            <a v-for="(pathItem, index) in pathItems"
               :key="index"
               @click="handleClickItem(pathItem)">{{pathItem[displayProp]}}</a>
        </div>
        <ul class="list" :style="{ 'max-height': maxHeight ? maxHeight : 'auto' }">
            <li v-for="(contentItem, index) in contentItems"
                :key="index"
                :enterable="isEnterable(contentItem)"
                @click="handleClickItem(contentItem)">
                <div v-if="isDirectlyChoosable(contentItem)"
                     class="left m-icon m-icon-check-circle"
                     @click.stop="handleDirectlyChooseItem(contentItem)"></div>
                <span class="left">{{contentItem[displayProp]}}</span>
                <!--<span v-if="isEnterable(contentItem)" class="right"> > </span>-->
                <div v-if="isEnterable(contentItem)" class="right m-icon m-icon-right-arrow"></div>
            </li>
        </ul>
    </div>
</template>
<script>

  // import '../statics/custom-font.ttf'

  export default {

    props: {
      initialPathItems: { type: Array },
      contentItems: { type: Array },
      isEnterable: { type: Function },
      displayProp: { type: String },
      isDirectlyChoosable: { type: Function, default: () => false },
      maxHeight: { type: String }
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
      handleDirectlyChooseItem(item) {
        this.$emit('on-choose-item', item)
      },

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
    $disabledColor: #515151;
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
        font-size: 0.9em;
        font-weight: bold;
        overflow-y: scroll;
        li {
            font-size: 1.2em;
            list-style: none;
            padding: 15px 10px;
            border-bottom: 1px solid gray;
            color: $disabledColor;
            line-height: 1em;
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
    .m-icon {
        width: 1em;
        height: 1em;
        margin-right: 10px;
    }
    .m-icon-check-circle {
        background-size: cover;
        background-image: url('data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijc2OCIgaGVpZ2h0PSI3NjgiIHZpZXdCb3g9IjAgMCA3NjggNzY4Ij4KPHRpdGxlPjwvdGl0bGU+CjxnIGlkPSJpY29tb29uLWlnbm9yZSI+CjwvZz4KPHBhdGggZD0iTTcwNCAzMjMuMmMtMTkuMiAwLTMyIDEyLjgtMzIgMzJ2MjguOGMwIDE2MC0xMjggMjg4LTI4OCAyODggMCAwIDAgMCAwIDAtMTYwIDAtMjg4LTEyOC0yODgtMjg4czEyOC0yODggMjg4LTI4OGMwIDAgMCAwIDAgMCA0MS42IDAgODAgOS42IDExOC40IDI1LjYgMTYgNi40IDM1LjIgMCA0MS42LTE2czAtMzUuMi0xNi00MS42Yy00NC44LTE5LjItOTIuOC0zMi0xNDQtMzIgMCAwIDAgMCAwIDAtMTk1LjIgMC0zNTIgMTU2LjgtMzUyIDM1MnMxNTYuOCAzNTIgMzUyIDM1MmMwIDAgMCAwIDAgMCAxOTUuMiAwIDM1Mi0xNTYuOCAzNTItMzUydi0yOC44YzAtMTkuMi0xMi44LTMyLTMyLTMyeiI+PC9wYXRoPgo8cGF0aCBkPSJNMzEwLjQgMzI5LjZjLTEyLjgtMTIuOC0zMi0xMi44LTQ0LjggMHMtMTIuOCAzMiAwIDQ0LjhsOTYgOTZjNi40IDYuNCAxMi44IDkuNiAyMi40IDkuNnMxNi0zLjIgMjIuNC05LjZsMzIwLTMyMGMxMi44LTEyLjggMTIuOC0zMiAwLTQ0LjhzLTMyLTEyLjgtNDQuOCAwbC0yOTcuNiAyOTcuNi03My42LTczLjZ6Ij48L3BhdGg+Cjwvc3ZnPgo=');
    }
    .m-icon-right-arrow {
        background-size: cover;
        background-image:url('data:image/svg+xml;base64,PCEtLSBHZW5lcmF0ZWQgYnkgSWNvTW9vbi5pbyAtLT4KPHN2ZyB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9Ijc2OCIgaGVpZ2h0PSI3NjgiIHZpZXdCb3g9IjAgMCA3NjggNzY4Ij4KPHRpdGxlPjwvdGl0bGU+CjxnIGlkPSJpY29tb29uLWlnbm9yZSI+CjwvZz4KPHBhdGggZD0iTTUwMi40IDM2MS42bC0xOTItMTkyYy0xMi44LTEyLjgtMzItMTIuOC00NC44IDBzLTEyLjggMzIgMCA0NC44bDE2OS42IDE2OS42LTE2OS42IDE2OS42Yy0xMi44IDEyLjgtMTIuOCAzMiAwIDQ0LjggNi40IDYuNCAxMi44IDkuNiAyMi40IDkuNnMxNi0zLjIgMjIuNC05LjZsMTkyLTE5MmMxMi44LTEyLjggMTIuOC0zMiAwLTQ0Ljh6Ij48L3BhdGg+Cjwvc3ZnPgo=');
    }
</style>
