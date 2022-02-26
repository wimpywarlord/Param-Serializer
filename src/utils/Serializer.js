import { setNotification } from './NotificationHelper.js';
import { unSetNotification } from './NotificationHelper.js';

export const serializerOutput = (
	setOutputModal,
	setSerializedOutput,
	setShowNotification,
	setNotificationMessage,
	setNotificationType,
	inputJsonObject
) => {
	try {
		const obj = JSON.parse(JSON.parse(JSON.stringify(inputJsonObject)));
		const outputFromSerializer = Serializer(
			obj,
			setNotificationMessage,
			setShowNotification,
			setNotificationType
		);
		if (outputFromSerializer) {
			setSerializedOutput(outputFromSerializer);
			setNotification(
				setNotificationMessage,
				setShowNotification,
				setNotificationType,
				'Conversion successful',
				'success'
			);
			unSetNotification(
				setNotificationMessage,
				setShowNotification,
				setNotificationType
			);
			setOutputModal(true);
		}
	} catch (error) {
		setNotification(
			setNotificationMessage,
			setShowNotification,
			setNotificationType,
			'You entered a invalid JSON.',
			'error'
		);
		unSetNotification(
			setNotificationMessage,
			setShowNotification,
			setNotificationType
		);
	}
};

const Serializer = (
	obj,
	setNotificationMessage,
	setShowNotification,
	setNotificationType
) => {
	var pairs = [];
	try {
		for (var prop in obj) {
			if (!obj.hasOwnProperty(prop)) {
				continue;
			}
			if (Object.prototype.toString.call(obj[prop]) === '[object Object]') {
				pairs.push(Serializer(obj[prop]));
				continue;
			}
			pairs.push(prop + '=' + encodeURIComponent(obj[prop]));
		}
		return pairs.join('&');
	} catch (error) {
		setNotification(
			setNotificationMessage,
			setShowNotification,
			setNotificationType,
			'Unable to serialize the given object, please try again.',
			'error'
		);
		unSetNotification(
			setNotificationMessage,
			setShowNotification,
			setNotificationType
		);
	}
};
