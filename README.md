# Priv I Kirumi

Rebuilt static website for GitHub Pages.

## Pages
- `index.html` – home/navigation
- `images.html` – Google Drive image gallery
- `videos.html` – Google Drive videos
- `files.html` – folder/file manager
- `texts.html` – local browser Text Library
- `websim.html` – saved WebSim project link

## Configuration
The Drive pages use the previously supplied Apps Script deployment URL and Drive root folder ID in `drive.js`.

The old Text Library Apps Script endpoint could not be recovered. The rebuilt Texts page currently saves locally in the browser, not to a shared online library.

## Important password limitation
The page password check is client-side. It is a basic access screen, not secure authentication: anyone with access to the repository or page source can inspect or bypass it. Do not store sensitive files behind this gate. GitHub Pages cannot privately protect static page contents.

The password is checked on each page load and is not saved in local storage.