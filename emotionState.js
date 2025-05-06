import {context} from "./variables.js"


export default class EmotionStateObject {

	constructor(isHappy, hitboxShape, hitboxWidth, hitboxHeight, image) {
		this.happy = isHappy;
		this.sprite = image;
		this.hitbox = {
			shape: hitboxShape,
			width: hitboxWidth,
			height: hitboxHeight

			};
		}

	displayImage(positionX, positionY) {
		this.image = new Image();
		this.image.src = this.sprite;
		

	}


}
