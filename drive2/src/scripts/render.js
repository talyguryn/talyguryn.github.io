const wrapper = document.getElementById('article-content');

class Render {
  toHTML(articleContent) {
    const blocks = articleContent.blocks;

    blocks.forEach(block => {
      const blockElement = document.createElement('DIV');
      const data = block.data;

      switch (block.type) {
        case 'header': {
          const header = document.createElement(`H${data.level}`);

          header.innerHTML = data.text;
          blockElement.appendChild(header);
          break;
        }
        case 'paragraph': {
          const paragraph = document.createElement('P');

          paragraph.innerHTML = data.text;
          blockElement.appendChild(paragraph);
          break;
        }
        case 'image': {
          const figure = document.createElement('FIGURE');

          figure.classList.add('article-image');
          if (data.withBorder) figure.classList.add('article-image--bordered');
          if (data.stretched) figure.classList.add('article-image--stretched');
          if (data.withBackground) figure.classList.add('article-image--backgrounded');

          const image = document.createElement('IMG');

          image.src = data.url;

          figure.appendChild(image);

          if (data.caption) {
            const caption = document.createElement('DIV');

            caption.classList.add('article-image-caption');
            caption.innerHTML = data.caption;

            figure.appendChild(caption);
          }

          blockElement.appendChild(figure);
          break;
        }
      }

      wrapper.appendChild(blockElement);
    });
  }

  clear() {
    wrapper.innerHTML = '';
  }
}

module.exports = new Render();