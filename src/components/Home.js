import '../css/Notification.css';
import '../css/Home.css';

import FormContainer from './FormContainer.js';
import Notification from './Notification.js';
import Theory from './Theory.js';
import References from './References.js';

// REACT BOOTSTRAP IMPORTS
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

import { useState } from 'react';

function Home() {
	const [showNotification, setShowNotification] = useState(false);
	const [notificationType, setNotificationType] = useState('');
	const [notificationMessage, setNotificationMessage] = useState(
		'Some Error occurred'
	);

	const [homeViewConverter, setHomeViewConverter] = useState(true);
	const [homeViewTheory, setHomeTheory] = useState(false);
	const [homeViewCredits, setHomeCredits] = useState(false);

	return (
		<div>
			<Notification
				showNotification={showNotification}
				notificationMessage={notificationMessage}
				notificationType={notificationType}
				setNotificationType={setNotificationType}
				setShowNotification={setShowNotification}></Notification>
			<div className='m-0 home-view-button-container-box'>
				<ButtonGroup className='mt-5' aria-label='View Selector'>
					<Button
						className={
							homeViewTheory
								? 'home-view-button-shadow-active'
								: 'home-view-button-shadow'
						}
						variant='light'
						onClick={() => {
							setHomeTheory(true);
							setHomeViewConverter(false);
							setHomeCredits(false);
						}}>
						Theory
					</Button>
					<Button
						className={
							homeViewConverter
								? 'home-view-button-shadow-active'
								: 'home-view-button-shadow'
						}
						variant='light'
						onClick={() => {
							setHomeViewConverter(true);
							setHomeTheory(false);
							setHomeCredits(false);
						}}>
						JSON to HTTP Query
					</Button>
					<Button
						className={
							homeViewCredits
								? 'home-view-button-shadow-active'
								: 'home-view-button-shadow'
						}
						variant='light'
						click
						onClick={() => {
							setHomeViewConverter(false);
							setHomeTheory(false);
							setHomeCredits(true);
						}}>
						References
					</Button>
				</ButtonGroup>
			</div>
			{homeViewConverter && (
				<div className='form-parent-container'>
					<FormContainer
						setShowNotification={setShowNotification}
						setNotificationType={setNotificationType}
						setNotificationMessage={setNotificationMessage}></FormContainer>
				</div>
			)}
			{homeViewTheory && <Theory></Theory>}
			{homeViewCredits && <References></References>}
		</div>
	);
}

export default Home;
