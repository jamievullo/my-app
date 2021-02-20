import React from 'react';
import { Steps, Button, ButtonGroup } from 'rsuite';

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
            <div style={{marginTop: '2em'}}>
                <Steps current={step} small >
                    <Steps.Item title="Finished" description="Step 1" />
                    <Steps.Item title="Ongoing" description="Step 2" />
                    <Steps.Item title="Waiting" description="Step 3" />
                    <Steps.Item title="Waiting" description="Step 4" />
                </Steps>
                <hr />
                <ButtonGroup>
                    <Button onClick={this.decline} disabled={step === 0}>
                    Previous
                    </Button>
                    <Button onClick={this.increase} disabled={step === 3}>
                    Next
                    </Button>
                </ButtonGroup>
            </div>
        );
    }
}