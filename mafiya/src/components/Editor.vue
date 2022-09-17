<template>
  <div class="editor" v-if="editor" :style="{width}">
    <menuBar v-if="edit" class="editor-header" :editor="editor" />
    <editor-content :editor="editor" />
  </div>
</template>

<script>
import StarterKit from '@tiptap/starter-kit'
import Image from '@tiptap/extension-image'
import { Editor, EditorContent } from '@tiptap/vue-3'
import menuBar from './menuBar.vue'
export default {
  components: {
    EditorContent,
    menuBar
  },

  props: {
      modelValue: {
          type: String,
          default: '',
      },
      edit:{
        type:Boolean,
        default:true
      },
  },

  emits: ['update:modelValue'],

  data() {
    return {
      editor: null,
    }
  },

  watch: {
    //时刻比较传入的modelValue的值，如果不一致就修改。
    modelValue(value) {
      // HTML
      // const isSame = this.editor.getHTML() === value

      // JSON
      //这个value应该是一个json对象？
      const isSame = JSON.stringify(this.editor.getJSON()) === JSON.stringify(value)

      if (isSame) {
        return
      }

      this.editor.commands.setContent(value, false)

      // if(value.editable==false){
      //   this.editor.commands.setEditable(false);
      // }
    },
  },

  mounted() {
    var that=this;
    this.editor = new Editor({
      extensions: [
        StarterKit,
          Image
      ],
      editable:that.edit,
      content:this.modelValue,
      onUpdate: () => {
        // HTML
        // this.$emit('update:modelValue', this.editor.getHTML())

        // JSON
        this.$emit('update:modelValue', this.editor.getJSON())
      },
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
}
</script>

<style lang="scss">
.ProseMirror {
  word-wrap: break-word;
  white-space: pre-wrap;
  white-space: break-spaces;
  -webkit-font-variant-ligatures: none;
  font-variant-ligatures: none;
  font-feature-settings: "liga" 0; /* the above doesn't seem to work in Edge */
}

.editor {
  display: flex;
  flex-direction: column;
  color: #0d0d0d;
  background-color: #fff;
  //border: 3px solid #0d0d0d;
  border-radius: .75rem;

  &-header {
    display: flex;
    align-items: center;
    flex: 0 0 auto;
    flex-wrap: wrap;
    padding: .25rem;
    border-bottom: 3px solid #0d0d0d;
  }

  &-content {
    padding: .7rem .5rem;
    flex: 1 1 auto;
    overflow-x: hidden;
    overflow-y: auto;
    -webkit-overflow-scrolling: touch;
  }
}


/* 基本编辑器样式 */
.ProseMirror {
  height: 100%;

  &:focus {
    outline: none;
  }

  ul,
  ol {
    padding: 0 1rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    line-height: 1.1;
  }

  code {
    background-color: rgba(#616161, .1);
    color: #616161;
  }

  pre {
    background: #0d0d0d;
    color: #fff;
    font-family: 'JetBrainsMono', monospace;
    padding: .75rem 1rem;
    border-radius: .5rem;

    code {
      color: inherit;
      padding: 0;
      background: none;
      font-size: .8rem;
    }
  }

  mark {
    background-color: #faf594;
  }

  img {
    width: 60%;
    height: auto;
  }

  hr {
    margin: 1rem 0;
  }

  blockquote {
    padding-left: 1rem;
    border-left: 2px solid rgba(#0d0d0d, .1);
  }

  hr {
    border: none;
    border-top: 2px solid rgba(#0d0d0d, .1);
    margin: 2rem 0;
  }

  ul[data-type="taskList"] {
    list-style: none;
    padding: 0;

    li {
      display: flex;
      align-items: center;

      > label {
        flex: 0 0 auto;
        margin-right: .5rem;
        user-select: none;
      }

      > div {
        flex: 1 1 auto;
      }
    }
  }
}


</style>