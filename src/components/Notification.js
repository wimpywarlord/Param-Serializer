import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer';

function Home(props) {
	const {
		notificationMessage,
		setShowNotification,
		showNotification,
		setNotificationType,
		notificationType,
	} = props;

	const closeNotification = () => {
		setShowNotification(false);
		setNotificationType('');
	};

	const returnNotificationLabel = (notificationType) => {
		if (notificationType === 'error') {
			return <span className='me-auto'>Error occurred</span>;
		} else if (notificationType === 'success') {
			return <span className='me-auto'>Operation successful</span>;
		}
	};

	return (
		<div>
			<ToastContainer position='top-end' className='m-2'>
				<Toast
					show={showNotification}
					animation={true}
					onClose={closeNotification}>
					<Toast.Header>
						<div className='notification-type-container-box'>
							<div className={`notification-type-${notificationType}`}></div>
						</div>
						{returnNotificationLabel(notificationType)}
						<small>Few seconds ago</small>
					</Toast.Header>
					<Toast.Body>{notificationMessage}</Toast.Body>
				</Toast>
			</ToastContainer>
		</div>
	);
}

export default Home;
