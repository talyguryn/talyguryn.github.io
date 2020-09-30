let pageContent = require('./pageContent');
const render = require('./render');
const Editor = require('./editor').default;

const buttonNew = document.getElementById('button-new');
const buttonSave = document.getElementById('button-save');
const buttonEdit = document.getElementById('button-edit');

const editor = new Editor({
  holderId: 'editor',
  data: pageContent
});

buttonSave.addEventListener('click', () => {
  editor.save().then((outputData) => {
    render.clear();
    render.toHTML(outputData);

    pageContent = outputData;

    document.getElementById('article-wrapper').style.display = 'block';
    document.getElementById('editor-wrapper').style.display = 'none';
  });
});

buttonEdit.addEventListener('click', () => {
  document.getElementById('article-wrapper').style.display = 'none';
  document.getElementById('editor-wrapper').style.display = 'block';
});

buttonNew.addEventListener('click', () => {
  editor.editor.render({
    blocks: [
      {
        type: "header",
        data: {
          text: "",
          level: 1
        }
      }
    ]
  });

  document.getElementById('article-wrapper').style.display = 'none';
  document.getElementById('editor-wrapper').style.display = 'block';
});

module.exports = {
  render,
  pageContent,
  editor
};