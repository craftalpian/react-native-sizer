import { Dimensions } from 'react-native';

// Get width and height from your device dimension
const { width, height } = Dimensions.get('window');

class RNSizer {
    // Using iPhone X dimension
    constructor(designHeight = 800, designWidth = 375) {
        this.designHeight = designHeight;
        this.designWidth = designWidth;
    }

    // You can use 'height' | 'h' | 'tinggi' | 't' | leave it blank for height type
    // You can use 'width' | 'w' | 'lebar' | 'l' for width type
    sizer(size, type = 'height') {
        return ['width', 'w', 'lebar', 'l'].includes(type) ? width / (this.designWidth / size) : height / (this.designHeight / size);
    }
}

module.exports = RNSizer;