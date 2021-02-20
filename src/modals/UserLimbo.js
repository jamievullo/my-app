import React, { useState } from 'react'
import { Form, Button, Container, Collapse, Row, Image } from 'react-bootstrap'
import example1 from '../images/IDSampleImage.png';
import example2 from '../images/PassportSampleImage.jpg';
import example3 from '../images/FaceWithID.png';
import thumbnail1 from '../images/IDSampleImage.png';
import thumbnail2 from '../images/PassportSampleImage.jpg';
import thumbnail3 from '../images/FaceWithID.png';

export default function UserLimbo(props) {

    const [ file, setFile ] = useState(false);
    const [ acceptImage, setAcceptImage ] = useState(false)
    const [ thumbnail, setThumbnail] = useState(true)

    // NOTE: component takes in props for checkpoint
    const checkpoint = props.checkpoint

    const data = {
        identification: {
            thumbNailImage: [thumbnail1, thumbnail2],
            sampleImages: [ example1, example2 ],
            instructions: "Upload an image of your government issued ID or current passport. Please ensure that all information is visible and easy to read. Click on thumbnails below to see examples:",
        },
        usersIdentification: {
            thumbNailImage: [thumbnail3],
            sampleImages: [example3],
            instructions: "Upload an image of you holding your government ID/current passport next to your face. Your face and all information on ID must be visible and easy to read. Any unclear images or obstructions to your face for identification will result in delays in your verification progress. Click on thumbnail below to see example:",
        }
    }

    const handleImageUpload = e => {
        const upload = e.target.files[0]    
        let reader = new FileReader();
        reader.readAsDataURL(upload); 
        reader.onloadend = function() {
        
        setFile(reader.result)  
        setThumbnail(true)
        }
    }

    return (
        <Container style={{ marginTop: "4em", width: "100%" }}>
            <h5 style={{ marginBottom: "2em"}} >Identity Verification</h5>            
                <div style={{textAlign: "left"}}>{data[checkpoint].instructions}</div>

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
            <div onClick={() => setThumbnail(!thumbnail)} style={{marginBottom: "1em"}}>
                { thumbnail === true ?
                    data[checkpoint].thumbNailImage.map((imageKeyName, i) => (
                        <img src={imageKeyName} key={i} style={{ width: "12%", marginBottom: "2em"  }} className="rounded border border-dark"/>
                    ))
                    :
                    data[checkpoint].sampleImages.map((imageKeyName, i) => (
                        <img src={imageKeyName} key={i} style={{ width: "90%", marginBottom: "2em" }} className="rounded border border-dark"/>
                    ))
                }
            </div>
        </Container>            
    )
}