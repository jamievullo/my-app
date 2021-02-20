import React from 'react';
import { Steps, Button, ButtonGroup } from 'rsuite';
// import { Modal } from 'bootstrap';
import Modal1 from './Modal1';
import UserLimbo from './UserLimbo';

export default class VerificationProgressBar extends React.Component {
    constructor() {
        super();
        this.state = {
            step: 0
        };

        this.decline = this.decline.bind(this);
        this.increase = this.increase.bind(this);
        }

    changePercent(nextstep) {
        const step = nextstep < 0 ? 0 : nextstep > 3 ? 3 : nextstep;
        this.setState({
            step
        });
    }

    decline() {
        this.changePercent(this.state.step - 1);
    }

    increase() {
        this.changePercent(this.state.step + 1);
    }

    render() {
        const { step } = this.state;
        return (
            <>
                <div id="stepsContainer" >
                    <Steps current={step} small style={{position: "fixed", top: "0", width: "100%", backgroundColor: "var(--background-charcoal)"}}>
                        <Steps.Item title="" description="" />
                        <Steps.Item title="" description="" />
                        <Steps.Item title="" description="" />
                        <Steps.Item title="" description="" />  
                    </Steps>
                </div>
                <div>
                    <ButtonGroup style={{marginTop: "4em"}}>
                        <Button onClick={this.decline} disabled={step === 0}>
                        Back
                        </Button>
                        <Button onClick={this.increase} disabled={step === 3}>
                        Next
                        </Button>
                    </ButtonGroup>
                    {/* <Modal1 /> */}
                    {/* <UserLimbo checkpoint="identification" /> */}
                    <UserLimbo checkpoint="usersIdentification" />
                </div>
            </>
        );
    }
}