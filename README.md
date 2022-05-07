# React-Native-Sizer 📏
This is actually the standard code I use for the Intermediary app. Over time, almost all of my react-native projects use this code. So I think that making this package, will make it easier for me in the future.


<img src="https://i.ibb.co/b61gzyc/RNS-formula.png" width="600" />

> P.S: I just made my first react-native package, please help to fix if anything wrong✌😁
## API
|Function|Description|
|---|---|
|__sizer__(_size_, _type_)|_size_: number<br>_type_: `width` or `height`|

## Usage
```js
import RNSizer from 'react-native-sizer';

// Iphone X default dimension
const rns = new RNSizer();

console.log(`Height: ${rns.sizer(100, 'height')}`);
console.log(`Width: ${rns.sizer(50, 'width')}`);
```
## Sample

<img src="https://i.ibb.co/cJC3JWB/image.png" />

`height: 896px` and `width: 414px`

So you can write like this:
```js
import RNSizer from 'react-native-sizer';

const rns = new RNSizer(896, 414);
```

If you want to make a button like this:

<img src="https://i.ibb.co/bH6txcC/image.png" />

You can write the full code like this:
```js
import {View} from 'react-native';
import RNSizer from 'react-native-sizer';

const App = () => {
    const rns = new RNSizer(896, 414);
    
    return (
        <View style={{ height: rns.sizer(63), width: rns.sizer(374, 'w') }} />
    );
};
```

Credit: [Meditation App](https://www.figma.com/file/j363NtS1s7LFTSdsjXOx4k/Meditation-app-UI-(Community)?node-id=401%3A2) Design
