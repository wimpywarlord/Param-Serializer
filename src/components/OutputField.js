import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Tooltip from 'react-bootstrap/Tooltip';
import { OverlayTrigger } from 'react-bootstrap';

import '../css/OutputField.css';

import {
	unSetNotification,
	setNotification,
} from '../utils/NotificationHelper';

const renderTooltip = (props) => (
	<Tooltip id='button-tooltip' {...props}>
		Copy to clipboard.
	</Tooltip>
);

function OutputField(props) {
	const {
		serializedOutput,
		setShowNotification,
		setNotificationMessage,
		setNotificationType,
	} = props;

	const copyToClickBoard = () => {
		// CLIPBOARD BROWSER API
		const clipboardAPI = navigator.clipboard;
		clipboardAPI
			.writeText(serializedOutput)
			.then(() => {
				setNotification(
					setNotificationMessage,
					setShowNotification,
					setNotificationType,
					'Text successfully copied.',
					'success'
				);
				unSetNotification(
					setNotificationMessage,
					setShowNotification,
					setNotificationType
				);
			})
			.catch(() => {
				setNotification(
					setNotificationMessage,
					setShowNotification,
					setNotificationType,
					'Unable to copy to clipboard.',
					'error'
				);
				unSetNotification(
					setNotificationMessage,
					setShowNotification,
					setNotificationType
				);
			});
	};

	return (
		<div>
			<Row className='mt-4'>
				<Col xs={10} className='p-0 m-0'>
					<Form.Group controlId='formOutputSerialized'>
						<Form.Control
							className='output-field-box'
							value={serializedOutput}
							type='text'
							placeholder='Your serialized output.'
						/>
					</Form.Group>
				</Col>
				<Col className='p-0 m-0 d-grid gap-2' xs={2}>
					<OverlayTrigger
						placement='right'
						delay={{ show: 250, hide: 350 }}
						overlay={renderTooltip}>
						<Button className='copy-button' onClick={copyToClickBoard}>
							<img
								src='https://img.icons8.com/small/16/000000/copy.png'
								alt='copy-icon'
							/>
						</Button>
					</OverlayTrigger>
				</Col>
			</Row>
		</div>
	);
}

export default OutputField;
