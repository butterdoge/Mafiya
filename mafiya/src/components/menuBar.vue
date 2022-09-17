<template>
  <div>
    <template v-for="(item, index) in items">
      <div class="divider" v-if="item.type === 'divider'" :key="`divider${index}`" />
      <menu-item v-else :key="index" v-bind="item" />
    </template>
  </div>
</template>

<script>
import menuItem from './menuItem.vue'
import {reactive} from "vue";

export default {
  components: {
    menuItem
  },

  props: {
    editor: {
      type: Object,
      required: true
    }
  },
  setup(props){
    const items = reactive([
      {
        icon: 'bold',
        title: 'Bold',
        action: () => props.editor.chain().focus().toggleBold().run(),
        isActive: () => props.editor.isActive('bold')
      },
      {
        icon: 'italic',
        title: 'Italic',
        action: () => props.editor.chain().focus().toggleItalic().run(),
        isActive: () => props.editor.isActive('italic')
      },
      {
        icon: 'strikethrough',
        title: 'Strike',
        action: () => props.editor.chain().focus().toggleStrike().run(),
        isActive: () => props.editor.isActive('strike')
      },
      {
        icon: 'code-view',
        title: 'Code',
        action: () => props.editor.chain().focus().toggleCode().run(),
        isActive: () => props.editor.isActive('code')
      },
      {
        icon: 'h-1',
        title: 'Heading 1',
        action: () => props.editor.chain().focus().toggleHeading({ level: 1 }).run(),
        isActive: () => props.editor.isActive('heading', { level: 1 })
      },
      {
        icon: 'h-2',
        title: 'Heading 2',
        action: () => props.editor.chain().focus().toggleHeading({ level: 2 }).run(),
        isActive: () => props.editor.isActive('heading', { level: 2 })
      },
      {
        icon: 'paragraph',
        title: 'Paragraph',
        action: () => props.editor.chain().focus().setParagraph().run(),
        isActive: () => props.editor.isActive('paragraph')
      },
      {
        icon: 'list-unordered',
        title: 'Bullet List',
        action: () => props.editor.chain().focus().toggleBulletList().run(),
        isActive: () => props.editor.isActive('bulletList')
      },
      {
        icon: 'list-ordered',
        title: 'Ordered List',
        action: () => props.editor.chain().focus().toggleOrderedList().run(),
        isActive: () => props.editor.isActive('orderedList')
      },
      {
        icon: 'code-box-line',
        title: 'Code Block',
        action: () => props.editor.chain().focus().toggleCodeBlock().run(),
        isActive: () => props.editor.isActive('codeBlock')
      },
      {
        icon: 'double-quotes-l',
        title: 'Blockquote',
        action: () => props.editor.chain().focus().toggleBlockquote().run(),
        isActive: () => props.editor.isActive('blockquote')
      },
      {
        icon: 'separator',
        title: 'Horizontal Rule',
        action: () => props.editor.chain().focus().setHorizontalRule().run()
      },
      {
        icon: 'text-wrap',
        title: 'Hard Break',
        action: () => props.editor.chain().focus().setHardBreak().run()
      },
      {
        icon: 'format-clear',
        title: 'Clear Format',
        action: () => props.editor.chain()
            .focus()
            .clearNodes()
            .unsetAllMarks()
            .run()
      },
      {
        icon: 'arrow-go-back-line',
        title: 'Undo',
        action: () => props.editor.chain().focus().undo().run()
      },
      {
        icon: 'arrow-go-forward-line',
        title: 'Redo',
        action: () => props.editor.chain().focus().redo().run()
      },
      {
        icon: 'image-line',
        title: '插入图片',
        action: () => {
          const url = window.prompt('URL')
          if (url) {
            props.editor.chain().focus().setImage({ src: url }).run()
          }
        }
      },
    ])
    return {
      items
    }
  },
}
</script>

<style lang="scss">
.divider {
  width: 2px;
  height: 1.25rem;
  background-color: rgba(#000, .1);
  margin-left: .5rem;
  margin-right: .75rem;
}
</style>
