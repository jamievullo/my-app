import React, { useState }from 'react';

import { Steps, Button, ButtonGroup } from 'rsuite';
// import { Modal } from 'bootstrap';
import Modal1 from './Modal1';
import UserLimbo from './UserLimbo';

export default function VerificationProgressBar() {

    const [step, setStep] = useState(1);

    const changePercent = (nextstep) => {
        const step = nextstep < 0 ? 0 : nextstep > 3 ? 3 : nextstep;
        setStep(step)
    }

    // const decline = () => {
    //     changePercent(step - 1);
    // }

    const increase = () => {
        changePercent(step + 1);
    }

    
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
                    {/* <ButtonGroup style={{marginTop: "4em"}}>
                        <Button onClick={decline} disabled={step === 0}>
                        Back
                        </Button>
                        <Button onClick={increase} disabled={step === 3}>
                        Next
                        </Button>
                    </ButtonGroup> */}
                    <Modal1 />
                    <UserLimbo checkpoint="identification" increase={increase}/>
                    <UserLimbo checkpoint="usersIdentification" increase={increase}/>
                </div>
            </>
        );
    }
