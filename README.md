# Emoji

A website that allows users to find and copy emoji directly to their clipboard.

![screen](showcase/emoji.JPG)

## Requirements

Install node package manager [npm](https://www.npmjs.com/).
You should be able to run the following commands.

```bash
node --version
npm --version
```

## Installation

```bash
git clone https://github.com/Nalhin/emoji
cd emoji
npm install
node emojiParser.js
```

##  Start

```bash
npm run start
```

## Data

Emoji Picker uses data from [Unicode](https://unicode.org/Public/emoji/12.0/emoji-test.txt).

emojiParser.js allows you to parse data directly from that website and save it to local json file. (Check folder names!)

## Stack

React, Redux, node.js, Sass.

## What I learned

- Scrapping and parsing simple websites with node.js.
- Parsing files in node.js.
- React refs.
- Basics of Redux.
- Local storage.
- Scss.
- Debouncing and Throttling.
- BEM.
- Prop Types.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
