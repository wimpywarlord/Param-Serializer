import '../css/Theory.css';

import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';

function Theory() {
	return (
		<div>
			<Container className='mt-5 mb-5'>
				<Row className='theory-container-box m-auto'>
					<h5 className='pt-5 px-5 mb-0'>
						Why do we need to convert a <code>JSON</code> object to{' '}
						<code>HTTP</code> query format in the first place?
						<hr></hr>
					</h5>
					<p className='px-5 pt-0 mt-0 mb-5'>
						To understand this, we must first understand about <code>GET</code>{' '}
						and <code>POST</code> requests. <br></br>
						<br></br>
						GET and POST requests are fundamentally different and are used for{' '}
						fundamentally different operations. GET requests are generally used
						for fetching data from servers where as POST requests are generally
						used for posting data to the server. <br></br>
						<br></br>
						Since GET and POST requests perform fundamentally different{' '}
						operations, their design and architecture is also profoundly{' '}
						different. To facilitate posting of data to the server,POST requests
						are augmented with a <code>BODY</code> attribute, which is capable
						of carrying your desired <code>PAYLOAD</code> along with the
						request. No such <code>BODY</code> attribute is present for GET
						requests. <br></br>
						<br></br>
						<br></br>
						<div className='image-for-reference-get-post-box'>
							<img
								src='https://i.ibb.co/8jvR2Jx/Group-6.png'
								alt='Group-6'
								className='image-for-reference-get-post m-auto'
								border='0'></img>
						</div>
						<br></br>
						<br></br>
						However, we often find ourselves in the need of sending some sort of{' '}
						data along with our GET request as well. Since there is no{' '}
						<code>BODY</code> attribute, we are forced to send data appended in
						the <code>URL</code> itself.
						<br></br>
						<br></br>
						Now the main problem arises. We usually have our data in{' '}
						<code>JSON</code> format, but <code>URLs</code> are incapable of
						processing <code>JSON</code> data. Therefore to accommodate our{' '}
						<code>JSON</code> data in the <code>URL</code> , we transpile the{' '}
						<code>JSON</code> object into <code>HTTP</code> Query format.
					</p>
				</Row>
			</Container>
		</div>
	);
}

export default Theory;
