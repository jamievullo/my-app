import React from 'react'
import { Modal } from 'rsuite';
import { ButtonToolbar } from 'rsuite';
import { Button } from 'rsuite';
import { Placeholder } from 'rsuite';
import { Loader } from 'rsuite';
import Modal2 from './Modal2';


class Modal1 extends React.Component {
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
                    <Button onClick={this.open}>Start Now</Button>
                </ButtonToolbar>
        
                <Modal show={show} onHide={this.close} onExited={this.resetRows}>
                    <Modal.Header>
                        <Modal.Title>We Are So Happy to Have You!</Modal.Title>
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
                        <Modal2 />
                        <Button onClick={this.close} appearance="subtle">
                            Cancel
                        </Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default Modal1;

// <svg width="365" height="792" viewBox="0 0 365 792" fill="none" xmlns="http://www.w3.org/2000/svg">
// <g clip-path="url(#clip0)">
// <rect width="365" height="792" fill="white"/>
// <rect x="-13" y="-12" width="386" height="1295" fill="#BB86FC"/>
// <mask id="path-2-outside-1" maskUnits="userSpaceOnUse" x="22.472" y="326.96" width="327" height="82" fill="black">
// <rect fill="white" x="22.472" y="326.96" width="327" height="82"/>
// <path d="M51.608 403.672C47.192 403.672 43.224 402.904 39.704 401.368C36.248 399.768 33.528 397.592 31.544 394.84C29.56 392.024 28.536 388.792 28.472 385.144H37.784C38.104 388.28 39.384 390.936 41.624 393.112C43.928 395.224 47.256 396.28 51.608 396.28C55.768 396.28 59.032 395.256 61.4 393.208C63.832 391.096 65.048 388.408 65.048 385.144C65.048 382.584 64.344 380.504 62.936 378.904C61.528 377.304 59.768 376.088 57.656 375.256C55.544 374.424 52.696 373.528 49.112 372.568C44.696 371.416 41.144 370.264 38.456 369.112C35.832 367.96 33.56 366.168 31.64 363.736C29.784 361.24 28.856 357.912 28.856 353.752C28.856 350.104 29.784 346.872 31.64 344.056C33.496 341.24 36.088 339.064 39.416 337.528C42.808 335.992 46.68 335.224 51.032 335.224C57.304 335.224 62.424 336.792 66.392 339.928C70.424 343.064 72.696 347.224 73.208 352.408H63.608C63.288 349.848 61.944 347.608 59.576 345.688C57.208 343.704 54.072 342.712 50.168 342.712C46.52 342.712 43.544 343.672 41.24 345.592C38.936 347.448 37.784 350.072 37.784 353.464C37.784 355.896 38.456 357.88 39.8 359.416C41.208 360.952 42.904 362.136 44.888 362.968C46.936 363.736 49.784 364.632 53.432 365.656C57.848 366.872 61.4 368.088 64.088 369.304C66.776 370.456 69.08 372.28 71 374.776C72.92 377.208 73.88 380.536 73.88 384.76C73.88 388.024 73.016 391.096 71.288 393.976C69.56 396.856 67 399.192 63.608 400.984C60.216 402.776 56.216 403.672 51.608 403.672Z"/>
// <path d="M133.392 350.392V403H124.656V395.224C122.992 397.912 120.656 400.024 117.648 401.56C114.704 403.032 111.44 403.768 107.856 403.768C103.76 403.768 100.08 402.936 96.8157 401.272C93.5517 399.544 90.9597 396.984 89.0397 393.592C87.1837 390.2 86.2557 386.072 86.2557 381.208V350.392H94.8957V380.056C94.8957 385.24 96.2077 389.24 98.8317 392.056C101.456 394.808 105.04 396.184 109.584 396.184C114.256 396.184 117.936 394.744 120.624 391.864C123.312 388.984 124.656 384.792 124.656 379.288V350.392H133.392Z"/>
// <path d="M156.878 360.184C158.67 357.048 161.294 354.488 164.75 352.504C168.206 350.52 172.142 349.528 176.558 349.528C181.294 349.528 185.55 350.648 189.326 352.888C193.102 355.128 196.078 358.296 198.254 362.392C200.43 366.424 201.518 371.128 201.518 376.504C201.518 381.816 200.43 386.552 198.254 390.712C196.078 394.872 193.07 398.104 189.23 400.408C185.454 402.712 181.23 403.864 176.558 403.864C172.014 403.864 168.014 402.872 164.558 400.888C161.166 398.904 158.606 396.376 156.878 393.304V403H148.142V331.96H156.878V360.184ZM192.59 376.504C192.59 372.536 191.79 369.08 190.19 366.136C188.59 363.192 186.414 360.952 183.662 359.416C180.974 357.88 177.998 357.112 174.734 357.112C171.534 357.112 168.558 357.912 165.806 359.512C163.118 361.048 160.942 363.32 159.278 366.328C157.678 369.272 156.878 372.696 156.878 376.6C156.878 380.568 157.678 384.056 159.278 387.064C160.942 390.008 163.118 392.28 165.806 393.88C168.558 395.416 171.534 396.184 174.734 396.184C177.998 396.184 180.974 395.416 183.662 393.88C186.414 392.28 188.59 390.008 190.19 387.064C191.79 384.056 192.59 380.536 192.59 376.504Z"/>
// <path d="M280.889 336.568V403H272.153V353.464L250.073 403H243.929L221.753 353.368V403H213.017V336.568H222.425L247.001 391.48L271.577 336.568H280.889Z"/>
// <path d="M343.704 374.68C343.704 376.344 343.609 378.104 343.417 379.96H301.368C301.688 385.144 303.448 389.208 306.648 392.152C309.912 395.032 313.848 396.472 318.456 396.472C322.232 396.472 325.369 395.608 327.865 393.88C330.425 392.088 332.216 389.72 333.24 386.776H342.648C341.24 391.832 338.425 395.96 334.201 399.16C329.977 402.296 324.728 403.864 318.456 403.864C313.464 403.864 308.984 402.744 305.016 400.504C301.112 398.264 298.04 395.096 295.8 391C293.56 386.84 292.44 382.04 292.44 376.6C292.44 371.16 293.528 366.392 295.704 362.296C297.88 358.2 300.92 355.064 304.824 352.888C308.792 350.648 313.336 349.528 318.456 349.528C323.448 349.528 327.864 350.616 331.704 352.792C335.544 354.968 338.488 357.976 340.536 361.816C342.648 365.592 343.704 369.88 343.704 374.68ZM334.68 372.856C334.68 369.528 333.944 366.68 332.472 364.312C331 361.88 328.984 360.056 326.424 358.84C323.928 357.56 321.145 356.92 318.073 356.92C313.657 356.92 309.881 358.328 306.745 361.144C303.673 363.96 301.912 367.864 301.464 372.856H334.68Z"/>
// </mask>
// <path d="M51.608 403.672C47.192 403.672 43.224 402.904 39.704 401.368C36.248 399.768 33.528 397.592 31.544 394.84C29.56 392.024 28.536 388.792 28.472 385.144H37.784C38.104 388.28 39.384 390.936 41.624 393.112C43.928 395.224 47.256 396.28 51.608 396.28C55.768 396.28 59.032 395.256 61.4 393.208C63.832 391.096 65.048 388.408 65.048 385.144C65.048 382.584 64.344 380.504 62.936 378.904C61.528 377.304 59.768 376.088 57.656 375.256C55.544 374.424 52.696 373.528 49.112 372.568C44.696 371.416 41.144 370.264 38.456 369.112C35.832 367.96 33.56 366.168 31.64 363.736C29.784 361.24 28.856 357.912 28.856 353.752C28.856 350.104 29.784 346.872 31.64 344.056C33.496 341.24 36.088 339.064 39.416 337.528C42.808 335.992 46.68 335.224 51.032 335.224C57.304 335.224 62.424 336.792 66.392 339.928C70.424 343.064 72.696 347.224 73.208 352.408H63.608C63.288 349.848 61.944 347.608 59.576 345.688C57.208 343.704 54.072 342.712 50.168 342.712C46.52 342.712 43.544 343.672 41.24 345.592C38.936 347.448 37.784 350.072 37.784 353.464C37.784 355.896 38.456 357.88 39.8 359.416C41.208 360.952 42.904 362.136 44.888 362.968C46.936 363.736 49.784 364.632 53.432 365.656C57.848 366.872 61.4 368.088 64.088 369.304C66.776 370.456 69.08 372.28 71 374.776C72.92 377.208 73.88 380.536 73.88 384.76C73.88 388.024 73.016 391.096 71.288 393.976C69.56 396.856 67 399.192 63.608 400.984C60.216 402.776 56.216 403.672 51.608 403.672Z" stroke="white" stroke-width="10" mask="url(#path-2-outside-1)"/>
// <path d="M133.392 350.392V403H124.656V395.224C122.992 397.912 120.656 400.024 117.648 401.56C114.704 403.032 111.44 403.768 107.856 403.768C103.76 403.768 100.08 402.936 96.8157 401.272C93.5517 399.544 90.9597 396.984 89.0397 393.592C87.1837 390.2 86.2557 386.072 86.2557 381.208V350.392H94.8957V380.056C94.8957 385.24 96.2077 389.24 98.8317 392.056C101.456 394.808 105.04 396.184 109.584 396.184C114.256 396.184 117.936 394.744 120.624 391.864C123.312 388.984 124.656 384.792 124.656 379.288V350.392H133.392Z" stroke="white" stroke-width="10" mask="url(#path-2-outside-1)"/>
// <path d="M156.878 360.184C158.67 357.048 161.294 354.488 164.75 352.504C168.206 350.52 172.142 349.528 176.558 349.528C181.294 349.528 185.55 350.648 189.326 352.888C193.102 355.128 196.078 358.296 198.254 362.392C200.43 366.424 201.518 371.128 201.518 376.504C201.518 381.816 200.43 386.552 198.254 390.712C196.078 394.872 193.07 398.104 189.23 400.408C185.454 402.712 181.23 403.864 176.558 403.864C172.014 403.864 168.014 402.872 164.558 400.888C161.166 398.904 158.606 396.376 156.878 393.304V403H148.142V331.96H156.878V360.184ZM192.59 376.504C192.59 372.536 191.79 369.08 190.19 366.136C188.59 363.192 186.414 360.952 183.662 359.416C180.974 357.88 177.998 357.112 174.734 357.112C171.534 357.112 168.558 357.912 165.806 359.512C163.118 361.048 160.942 363.32 159.278 366.328C157.678 369.272 156.878 372.696 156.878 376.6C156.878 380.568 157.678 384.056 159.278 387.064C160.942 390.008 163.118 392.28 165.806 393.88C168.558 395.416 171.534 396.184 174.734 396.184C177.998 396.184 180.974 395.416 183.662 393.88C186.414 392.28 188.59 390.008 190.19 387.064C191.79 384.056 192.59 380.536 192.59 376.504Z" stroke="white" stroke-width="10" mask="url(#path-2-outside-1)"/>
// <path d="M280.889 336.568V403H272.153V353.464L250.073 403H243.929L221.753 353.368V403H213.017V336.568H222.425L247.001 391.48L271.577 336.568H280.889Z" stroke="white" stroke-width="10" mask="url(#path-2-outside-1)"/>
// <path d="M343.704 374.68C343.704 376.344 343.609 378.104 343.417 379.96H301.368C301.688 385.144 303.448 389.208 306.648 392.152C309.912 395.032 313.848 396.472 318.456 396.472C322.232 396.472 325.369 395.608 327.865 393.88C330.425 392.088 332.216 389.72 333.24 386.776H342.648C341.24 391.832 338.425 395.96 334.201 399.16C329.977 402.296 324.728 403.864 318.456 403.864C313.464 403.864 308.984 402.744 305.016 400.504C301.112 398.264 298.04 395.096 295.8 391C293.56 386.84 292.44 382.04 292.44 376.6C292.44 371.16 293.528 366.392 295.704 362.296C297.88 358.2 300.92 355.064 304.824 352.888C308.792 350.648 313.336 349.528 318.456 349.528C323.448 349.528 327.864 350.616 331.704 352.792C335.544 354.968 338.488 357.976 340.536 361.816C342.648 365.592 343.704 369.88 343.704 374.68ZM334.68 372.856C334.68 369.528 333.944 366.68 332.472 364.312C331 361.88 328.984 360.056 326.424 358.84C323.928 357.56 321.145 356.92 318.073 356.92C313.657 356.92 309.881 358.328 306.745 361.144C303.673 363.96 301.912 367.864 301.464 372.856H334.68Z" stroke="white" stroke-width="10" mask="url(#path-2-outside-1)"/>
// </g>
// <defs>
// <clipPath id="clip0">
// <rect width="365" height="792" fill="white"/>
// </clipPath>
// </defs>
// </svg>