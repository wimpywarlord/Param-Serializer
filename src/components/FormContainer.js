// CUSTOM CSS IMPORTS
import '../css/FormContainer.css';

// BOOTSTRAP REACT IMPORTS
import { Form } from 'react-bootstrap';
import { FloatingLabel } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Tooltip from 'react-bootstrap/Tooltip';
import { OverlayTrigger } from 'react-bootstrap';

// REACT IMPORTS
import { useState } from 'react';

// CUSTOM UTILS IMPORTS
import { serializerOutput } from '../utils/Serializer.js';

// COMPONENT IMPORTS
import OutputField from './OutputField.js';

const renderTooltip = (props) => (
	<Tooltip id='button-tooltip' {...props}>
		Nesting context will be lost.
	</Tooltip>
);

function FormContainer(props) {
	const [inputJsonObject, setJsonObject] = useState();
	const [showOutputModal, setOutputModal] = useState(false);
	const [serializedOutput, setSerializedOutput] = useState('');
	const handleChange = (e) => setJsonObject(e.target.value);

	const { setShowNotification, setNotificationMessage, setNotificationType } =
		props;

	return (
		<div className='Form'>
			<Row>
				<Row className='m-0 p-0'>
					<FloatingLabel
						className='pl-2 mb-1 label-form-container'
						controlId='floatingTextarea'>
						Enter Json Object
						<OverlayTrigger
							placement='top'
							delay={{ show: 250, hide: 350 }}
							overlay={renderTooltip}>
							<span className='mx-2'>
								<img
									className='question-mark-icon'
									height={17}
									alt='Question-mark-icon'
									src='https://img.icons8.com/ios-glyphs/30/000000/question-mark.png'
								/>
							</span>
						</OverlayTrigger>
					</FloatingLabel>
				</Row>
				<Row className='m-0'>
					<Form.Control
						onChange={handleChange}
						value={inputJsonObject}
						as='textarea'
						placeholder='Example: {"x":"12345","y":{"z":"abcdef"}}'
					/>
					<small className='p-0 mb-4'>
						<small className='p-0 m-0' style={{ color: 'white' }}>
							*If you're sending anything other than a few simple parameters to
							the server in the URL then likely your design architecture is
							wrong.
						</small>
					</small>
					<Button
						variant='light'
						onClick={() => {
							serializerOutput(
								setOutputModal,
								setSerializedOutput,
								setShowNotification,
								setNotificationMessage,
								setNotificationType,
								inputJsonObject
							);
						}}>
						Convert
					</Button>
					{showOutputModal ? (
						<OutputField
							serializedOutput={serializedOutput}
							setShowNotification={setShowNotification}
							setNotificationMessage={setNotificationMessage}
							setNotificationType={setNotificationType}></OutputField>
					) : null}
				</Row>
			</Row>
		</div>
	);
}

export default FormContainer;
