# Nativescript Android Toast

![npm](https://img.shields.io/npm/v/nativescript-android-toast?color=blue)
![GitHub](https://img.shields.io/github/license/iamabs2001/nativescript-android-toast)
[![Build Status](https://travis-ci.com/iamabs2001/nativescript-chrome-tabs.svg?branch=master)](https://travis-ci.com/iamabs2001/nativescript-chrome-tabs)
![npm](https://img.shields.io/npm/dt/nativescript-android-toast)
![GitHub issues](https://img.shields.io/github/issues-raw/iamabs2001/nativescript-android-toast)
![Status](https://img.shields.io/badge/status-working-green)
![Twitter Follow](https://img.shields.io/twitter/follow/iamabs2001?style=social)

## Installation:
``` tns plugin add nativescript-android-toast ```

<hr>

## API (Methods)

```javascript
MakeToast(text : String, duration : "long" or "short");
```
<hr>

## API (Properties)
| Property | Type | Require |Description |
| --- | --- | --- | --- |
| text | String | - [x] | Text you want to toast |
| duration | String | - [ ] | "long" or "short" duration |

<hr>

## Demo

| Demo 1 | Demo 2 |
| ----------- | ----------- |
| ![Demo 1](1.png) | ![Demo 2](2.png) |


<hr>

## Usage

### TypeScript

```typescript
import Toast from "nativescript-android-toast";

showToast() {
    Toast.MakeToast("Hello Typescript","short");
}
```

<hr>

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

<hr>

https://developer.android.com/reference/android/widget/Toast