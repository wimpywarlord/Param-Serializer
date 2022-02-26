import '../css/References.css';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Container';

function References() {
	return (
		<div>
			<Container>
				<Row className='mt-5 mb-5'>
					<div className='references-box m-auto pb-5'>
						<h4 className='pt-5 px-5 mb-0'>Similar Websites</h4>
						<p className='px-5 pt-2 mt-0'>
                            <ul className='mt-2'>
                                ⭐ <a href="https://www.convertonline.io/convert/json-to-query-string" target="_blank" rel="noopener noreferrer">Works for nested objects and conserves nesting context.</a>
                                <br></br>
                                👉 <a href='https://www.convertsimple.com/convert-json-to-query-string/' target="_blank" rel="noopener noreferrer">Does not work for nested object.</a>
							</ul>
                        </p>
                        <h4 className='pt-2 px-5 mb-0'>Raw code for converting JSON to HTTP Query</h4>
                        <p className='px-5 pt-2 mt-0'>
							<ul className='mt-2'>
                                👉 <a href='https://stackoverflow.com/questions/6566456/how-to-serialize-an-object-into-a-list-of-url-query-parameters' target="_blank" rel="noopener noreferrer">Credits to @alex.</a>
                                <br></br>
                                👉 <a href="https://stackoverflow.com/questions/1714786/query-string-encoding-of-a-javascript-object" target="_blank" rel="noopener noreferrer">Another good source.</a>
							</ul>
                        </p>
                        <h4 className='pt-2 px-5 mb-0'>Icon Credits</h4>
                        <p className='px-5 pt-2 mt-0'>
							<ul className='mt-2'>
                                👉 <a href='https://icons8.com/icon/43524/copy' target="_blank" rel="noopener noreferrer">Copy icon by Icons8.</a>
							</ul>
                        </p>
					</div>
				</Row>
			</Container>
		</div>
	);
}

export default References;
