import React, { useState } from 'react'
import { Form, Button, Container, Collapse, Row, Image } from 'react-bootstrap'
import example1 from '../images/IDSampleImage.png';
import example2 from '../images/PassportSampleImage.png';
import example3 from '../images/FaceWithID.png'

export default function UserLimbo(props) {

    const [ file, setFile ] = useState(false);
    const [ acceptImage, setAcceptImage ] = useState(false)

    // NOTE: component takes in props for checkpoint
    const checkpoint = props.checkpoint

    const data = {
        identification: {
            sampleImages: [ example1, example2 ],
            directions: "Upload an image of your government issued ID or current passport. Please ensure that all information is visible and easy to read. See samples below:",
        },
        usersIdentification: {
            sampleImages: [example3],
            directions: "Upload an image of you holding your government ID/current passport next to your face. Your face and all information on ID must be visible and easy to read. Any unclear images or obstructions to your face for identification will result in delays in your verification progress. See sample below:",
        }
    }

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
                {/* NOTE: need to determine checkpoint value and way to incriment and render based of checkpoint value */}
                
                    {/* // <img src={data.identification.sampleImages[i]} key={i} style={{ width: "50%" }} className="rounded border border-dark"/> */}
                    <div style={{textAlign: "left"}}>{data[checkpoint].directions}</div>
                
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
                <div style={{marginBottom: "2em"}}>
                    <Button 
                        variant="light"
                        onClick={() => setAcceptImage(true)}
                    >
                        submit            
                    </Button>
                </div>
            </Form>
            {/* NOTE: need to determine step value and way to incriment and render based of step value */}
            {data[checkpoint].sampleImages.map((imageKeyName, i) => (
                <img src={imageKeyName} key={i} style={{ width: "50%" }} className="rounded border border-dark"/>
            ))}
        </Container>            
    )
}