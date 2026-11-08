# Image F · 修 MJ，还气质

Junie Lau 的独立导读（静态 HTML / CSS / JS）。介绍老F 的 Windows 桌面工具 [Image F](https://github.com/FXiaoai/ImageF)：测量 Midjourney 原图，写成给 GPT 的提示词；GPT 出图之后，再把修过之处以外的色彩、虚化和颗粒还原回来。

本站不是 Image F 的官方网站，Junie 也不是这个工具的作者。

- 仓库：https://github.com/JunieLau/Imagechagptmj
- 页面：https://junielau.github.io/Imagechagptmj/
- 上游：https://github.com/FXiaoai/ImageF

与 film-learning、ai-film-hits、neural-media 一样，是独立的 GitHub 仓库，用 GitHub Pages 发布。

## English

An independent study page by Junie Lau (static HTML / CSS / JS) about [Image F](https://github.com/FXiaoai/ImageF), the Windows desktop tool designed by 老F. It measures a Midjourney original, writes a prompt for GPT, then restores MJ colour, blur and grain outside what was fixed.

This is not the official Image F site, and Junie did not make the tool.

- Repository: https://github.com/JunieLau/Imagechagptmj
- Live site: https://junielau.github.io/Imagechagptmj/
- Upstream: https://github.com/FXiaoai/ImageF

Like film-learning, ai-film-hits and neural-media, this is an independent GitHub repository published with GitHub Pages.

## Files

| Path | Role |
| --- | --- |
| `index.html` | The page |
| `style.css` | Layout and type |
| `app.js` | Language toggle: 中英 / 中文 / English (`data-mode` on `<html>`, `.zh` / `.en`) |
| `.nojekyll` | Publish the files as they are |

Open `index.html` in a browser. There is no build step.
