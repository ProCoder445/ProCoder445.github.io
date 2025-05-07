import {context} from "./variables.js";


export class EmotionStateObject {

	constructor(isHappy, hitboxShape, hitboxWidth, hitboxHeight, image) {
		this.happy = isHappy;
		this.sprite = image;
		this.hitbox = {
			shape: hitboxShape,
			width: hitboxWidth,
			height: hitboxHeight

			};
		}

	drawImage(positionX, positionY) {
		this.image = new Image();
		this.image.src = this.sprite;
		context.drawImage(this.image, positionX, positionY);

	}


}
