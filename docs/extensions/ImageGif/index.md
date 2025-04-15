---
description: ImageGif

next:
  text: Twitter
  link: /extensions/Twitter/index.md
---

# ImageGif

ImageGif is a node extension that allows you to add an ImageGif to your editor.

## Usage

```tsx
import { ImageGif } from 'reactjs-tiptap-editor/extension-bundle'; // [!code ++]

const extensions = [
  ...,
  // Import Extensions Here
  ImageGif.configure({// [!code ++]
    GIPHY_API_KEY: 'GIPHY_API_KEY', // [!code ++]
  }),// [!code ++]
];
```

- `GIPHY_API_KEY` - Giphy API Key. You can get it from [Giphy Developers](https://developers.giphy.com/).
