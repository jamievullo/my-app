import React, { useState } from 'react'
import { Form, Button, Container, Collapse, Row, Image } from 'react-bootstrap'

export default function UserLimbo() {

    const [ file, setFile ] = useState(false);

    const handleImageUpload = e => {
        const upload = e.target.files[0]    
        var reader = new FileReader();
        reader.readAsDataURL(upload); 
        reader.onloadend = function() {
        
        setFile(reader.result)     
        }
    }

    return (
        <Container style={{ marginTop: "2em", width: "50%" }}>
            <Form>
                { file && (
                    <Container id="upload-preview">
                        <center>
                            <Image src={file} rounded thumbnail id="image-preview"/>
                        </center>
                    </Container>
                )}
                <Form.Group>
                    {/* <Form.Label>Select Image</Form.Label> */}
                    <Form.Control 
                        type="file"
                        accept="image/*"
                        onChange={e => handleImageUpload(e)}
                        />
                </Form.Group>
            </Form>
        </Container>            
    )
}
