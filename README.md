# <center> Nativescript Android Toast </center>


![npm](https://img.shields.io/npm/v/nativescript-android-toast?color=blue)
![GitHub](https://img.shields.io/github/license/iamabs2001/nativescript-android-toast)

## Installation:
``` tns plugin add nativescript-android-toast ```

<hr>

## API 

```javascript
MakeToast(text : String, duration : "long" or "short");
```
<hr>

## Usage

### TypeScript

```typescript
import Toast from "nativescript-android-toast";

showToast() {
    Toast.MakeToast("Hello Typescript","short");
}
```

```html
<Button text="click" (tap)="showToast();">
```

<hr>

### JavaScript

```javascript
var Toast = require("nativescript-android-toast");

showToast() {
    Toast.MakeToast("Hello Javascript","long");
}
```

<br>

https://developer.android.com/guide/topics/ui/notifiers/