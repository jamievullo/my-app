import React, { useState } from 'react'
import { Form, Button, Container, Collapse, Row, Image } from 'react-bootstrap'
import example1 from '../images/IDSampleImage.png';
import example2 from '../images/PassportSampleImage.png';

export default function UserLimbo() {

    const [ file, setFile ] = useState(false);
    const [ acceptImage, setAcceptImage ] = useState(false)

    const handleImageUpload = e => {
        const upload = e.target.files[0]    
        var reader = new FileReader();
        reader.readAsDataURL(upload); 
        reader.onloadend = function() {
        
        setFile(reader.result)     
        }
    }

    return (
        <Container style={{ marginTop: "2em", width: "100%" }}>
            <h5 style={{ marginBottom: "2em" }} >Identity Verification</h5>
                <div style={{textAlign: "left"}}>Upload an image of your government issued ID or current passport. Please ensure that all information is visible and easy to read. See samples below:</div>
            <Form>
                { file && (
                    <Container id="upload-preview">
                        <center>
                            <Image src={file} rounded thumbnail id="image-preview" style={{maxWidth: "80%"}}/>
                        </center>
                    </Container>
                )}
                <Form.Group style={{ marginTop: "2em"}}>
                    {/* <Form.Label>Select Image</Form.Label> */}
                    <Form.Control 
                        type="file"
                        accept="image/*"
                        onChange={e => handleImageUpload(e)}
                        />
                </Form.Group>
                <div style={{display: "flex", justifyContent: "space-between", marginBottom: "2em"}}>
                    <Button 
                        variant="secondary" 
                        onClick={() => acceptImage(false)}
                        variant='light'
                    >
                        pick a new image
                    </Button>
                    <Button 
                        variant="light"
                        onClick={() => acceptImage(true)}
                    >
                        submit            
                    </Button>
                </div>
            </Form>
            <img src={example1} style={{ width: "50%" }} className="rounded border-2"/>
            <img src={example2} style={{ width: "50%" }} className="rounded border-2"/>
        </Container>            
    )
}