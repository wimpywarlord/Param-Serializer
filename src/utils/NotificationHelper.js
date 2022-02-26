export const setNotification = (
	setNotificationMessage,
	setShowNotification,
	setNotificationType,
	message,
	type
) => {
	setShowNotification(true);
	setNotificationMessage(message);
	setNotificationType(type);
};
export const unSetNotification = (
	setNotificationMessage,
	setShowNotification,
	setNotificationType
) => {
	setTimeout(() => {
		setShowNotification(false);
	}, 3000);
};
