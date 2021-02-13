import React from 'react'
import { Modal } from 'rsuite';
import { ButtonToolbar } from 'rsuite';
import { Button } from 'rsuite';
import { Placeholder } from 'rsuite';
import { Loader } from 'rsuite';
import Modal3 from './Modal3';


class Modal2 extends React.Component {
    constructor(props) {
    super(props);
    this.state = {
        show: false,
        overflow: false,
        rows: 0
    };
        this.close = this.close.bind(this);
        this.open = this.open.bind(this);
        this.resetRows = this.resetRows.bind(this);
    }
    close() {
        this.setState({ show: false });
    }

    resetRows() {
        this.setState({ rows: 0 });
    }

    open(event) {
        this.setState({ show: true });
        setTimeout(() => {
            this.setState({
            //total rows in modal makes non scrollable
            rows: 20
            });
        }, 3500);
    }
    render() {
        const { overflow, show } = this.state;
        return (
            <div className="modal-container">
                <ButtonToolbar>
                    <Button onClick={this.open}>Upload Images</Button>
                </ButtonToolbar>
    
            <Modal show={show} onHide={this.close} onExited={this.resetRows}>
                <Modal.Header>
                <Modal.Title>We Can't Wait to Make You Deleriously Happy!!</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {this.state.rows ? (
                    <Placeholder.Paragraph rows={this.state.rows} />
                ) : (
                    <div style={{ textAlign: 'center' }}>
                    <Loader size="md" />
                    </div>
                )}
                </Modal.Body>
                <Modal.Footer>
                {/* <Button onClick={this.close} appearance="primary">
                    Ok
                </Button> */}
                <Modal3 />
                <Button onClick={this.close} appearance="subtle">
                    Cancel
                </Button>
                </Modal.Footer>
            </Modal>
            </div>
        );
    }
}

export default Modal2;