import React, { useState } from 'react'
import { Modal, Button } from 'react-bootstrap'

export default function Modal1() {
    const [show, setShow] = useState(false);
    const [nextStep, setNextStep] = useState(false);

    return (
        <div>
            <Button variant="primary" onClick={() => setShow(true)}>
            Press for Modal
            </Button>

                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    backdrop="static"
                    keyboard={false}
                    style={{
                        opacity:1
                    }}
                    
                >
                    <div id="modal-container" style={{backgroundColor: '#6d21ca'}}>
                    <Modal.Header closeButton>
                        <Modal.Title style={{color: "white"}}>We are so happy to have you!</Modal.Title>
                    </Modal.Header>
                    <Modal.Body >
                        <div style={{
                            maxHeight: "40vh",
                            color: "white",
                            overflowY: "scroll"
                            }}>
                            TERMS OF SERVICE

                                Definitions
                                In these Terms following terms have the following meanings:
                                "Chargeback" a bona fide demand by a credit-card provider for Dat Technology Inc to make good the loss the credit card provider has incurred because the User has without justification disputed a purchase for which the User paid for using the User’s credit card;
                                "Creator" a User who uploads Content on the Website to be viewed by other Users;
                                "Commission" the amount calculated as a percentage of the Revenue paid by Subs to view a Creator’s User Content or to use the Sub Interaction;
                                "Incentive Payment" the payments that are made by Dat Technology Inc to Users who introduce new Users to SubMe, which shall be equal to 5% of all the Commission earned by the referred User.
                                "Dat Technology Inc" Dat Technology Inc 238 Railroad Ave., Scranton, PA 18505.
                                "Sub" a User who follows another Creator and views the Creator’s User Content;
                                "Sub Interaction" any functionality offered by a Creator as part of that Creator’s User Content which is hosted by Sub.Me which allows a Sub to interact with (as opposed to just view) the User Content and or the Creator.
                                "Sub.Me" the social network of Users operating on the Website which enables Users to provide and view User Content and where appropriate, utilise Sub Interaction;
                                "Payment Provider" any third party approved by Dat Technology Inc which enables a User to make payments or a Creator to receive;
                                "Payout Options" the instruction given by each Creator to a Payment Provider as to how Commission will be transferred by the Payment Provider to the Creator;
                                "Refund" the return of monies to a Sub after a bona fide dispute, often issued prior to a chargeback;
                                "Revenue" the monies paid by a Sub to Dat Technology Inc to view User Content or to use Sub Interaction;
                                "User" any user of the Website, whether a Creator or a Sub;
                                "User Account" the section on the Website which can only be accessed by Dat Technology Inc or the User which inter alia details the Payment Provider and Payout Options;
                                "User Content" any and all photos, videos and other material or facility (including Sub Interaction functionality) uploaded onto the Website by a Creator;
                                "Wallet Credits" a prepayment made by a Sub to Dat Technology Inc to facilitate access to User Content/Sub Interaction under the terms contained within this agreement.
                                "Website" the website at www.Sub.Me.
                                * About
                                    * The Website is a social media website and application service which allows Users to create a proDat Technology Ince, upload photos and videos onto their proDat Technology Ince, set a monthly subscription price payable by other Users who wish to view their User Content and thereby generate revenue from Subs. Sub.Me is operated by Dat Technology Inc.
                                    * These Terms govern your use of the Website, including any content, functionality, and services offered on or through the Website whether part of Sub.Me. By registering with and using Sub.Me, you hereby accept and agree to be bound by and abide by these Terms. If you do not want to agree to these Terms of Service, you must not access or use the Website.
                                    * Any information given on the Website including responses to “frequently answered questions” is not legally binding on Dat Technology Inc is informative only and does not form part of the Terms.
                                    * The Website is only offered and available to Users who are 18 years of age or older. By using the Website, you represent and warrant that you are 18 years of age, that you are of legal age to form a binding contract with Dat Technology Inc. If you do not meet all of these conditions, you must not access or use the Website. The Privacy Policy outlines in greater detail how Dat Technology Inc uses third parties to verify your eligibility.
                                    * Dat Technology Inc reserves the right to make changes to these Terms at any time and at Dat Technology Inc’s sole discretion. All changes are effective immediately from the time Dat Technology Inc posts them, and apply to all access to and use of the Website thereafter. By continuing to use Sub.Me, you agree to the Terms as modified or as they currently appear. You are expected to check this page from time to time so you are aware of any changes, as they are binding on you.
                                    * By using Sub.Me you consent to receiving communications from Dat Technology Inc electronically, including emails and messages posted to your Sub.Me account, all as more fully detailed in the Privacy Policy (available here) (http://www.Sub.Me/privacy). You acknowledge and agree that all communications that Dat Technology Inc sends to you electronically satisfy any legal requirement that such communications be in writing. If you wish at any time to withdraw your consent to receiving communications from Dat Technology Inc, please email support@Sub.Me, notifying Dat Technology Inc of the withdrawal of your consent.
                                    * Dat Technology Inc does not own User Content on Sub.Me and views expressed by Users on Sub.Me do not represent Dat Technology Inc’s views. All transactions and interactions regarding User Content on Sub.Me are between Users. Except when Dat Technology Inc acts as the agent of a Creator to receive payment for the Creator from a Sub (as further described in clause 1.8), at no point will Dat Technology Inc be a party to or be responsible for any transaction or interaction between Users.
                                    * Where Dat Technology Inc receives payment from a Sub to view User Content uploaded by a Creator or utilise Sub Interaction, Dat Technology Inc receives such payment on behalf of the Creator and not the Sub. On receipt of payment by Dat Technology Inc the Creator shall have no right of action against the Sub for non-payment and the Creator shall be obliged to allow the Sub to view the User Content and utilise Sub Interaction (where applicable). Section 4 further describes the payment process.
                                    * Dat Technology Inc reserves the right at any time and without notice to:
                                        * modify, suspend or terminate Sub.Me or any portion thereof;
                                        * restrict, limit, suspend or terminate your access to Sub.Me or any portion thereof;
                                        * delete any content you post on Sub.Me as a Creator if in Dat Technology Inc’s reasonable opinion it does not comply with these Terms and/or any applicable law;
                                        * monitor your use of Sub.Me (including any content or message you post or broadcast on Sub.Me) to verify compliance with these Terms and/or any applicable law;
                                        * investigate any suspected or alleged misuse or unlawful use of Sub.Me and cooperate with law enforcement agencies in such investigation;
                                        * disclose information about your use of Sub.Me in connection with law enforcement investigation of any suspected or alleged illegal activity, or in response to a lawful court order; or
                                        * change the Payment Providers. If Dat Technology Inc does this then Dat Technology Inc will use its reasonable endeavours to verify the bona fides and good standing of the new Payment Provider and notify the User and applicable details will be uploaded to the User Account.
                                    * From time to time, Dat Technology Inc may restrict access to some parts of the Website, or the entire Website, to Users.
                                * How It Works
                                    * Sub.Me is a social media platform that lets you create a User proDat Technology Ince, which in turn allows you to:
                                        * upload User Content to be viewed by other Users or Sub Interaction to be used by other Subs; and/or
                                        * pay to view another User’s User Content or use another User’s Sub Interaction.
                                * Account Registration
                                    * To become a User you must register and create a User Account on Sub.Me. You must provide a valid email address, a username, and a password or a valid Twitter account. It is a condition of your use of the Website that all the information you provide on the Website is correct, current, and complete.
                                    * You agree that all information you provide as a User or otherwise, including but not limited to information provided through the use of any interactive features on the Website, is governed by Dat Technology Inc’s Privacy Policy at https://Sub.Me/privacy (/privacy), and you proceed on the basis that you are aware of how and why Dat Technology Inc process your personal data, as is set out in Dat Technology Inc’s Privacy Policy.
                                    * If you wish to view User Content you will need to provide details of a payment card to a Payment Provider. Your payment card information is stored by the Payment Provider.
                                    * If you elect to input two or more payment card details onto your User Account if payment of the Revenue from the first card is rejected because the payment card is no longer valid then the other payment card(s) will be used to collect full payment of the Revenue.
                                    * If you are a Creator and wish to receive payment of Commissions, you will need to include onto your User Account Payout Options and upload a valid form of ID. You may also need to submit additional legal information, such as a W-9 if you are resident in the United States of America. The exact information required will depend on your country of residence. Amounts due to you as a Creator from Subs will be paid to you by one of our Payment Providers in accordance with your Payout Options. With the exception of Creators wishing to receive payment by direct bank transfer from Dat Technology Inc, Dat Technology Inc does not store any data disclosed by you when you register your Payout Options with the Payment Provider. Section 4 further describes the payment processes.
                                    * By registering on Sub.Me, you confirm that:
                                        * all User Account registration and proDat Technology Ince information is truthful and accurate and that any User Content you provide is your own and does not infringe the intellectual property rights or any other proprietorial rights of a third party;
                                        * if you previously had a User Account with Sub.Me, your old User Account was not terminated or suspended by Dat Technology Inc for violation of the Terms of Service;
                                        * you register on Sub.Me for your own personal use and you will not sell, rent or transfer your User Account to any third party; and
                                        * Dat Technology Inc reserve the right, at any time, to verify the information which you provide to Dat Technology Inc as well as your compliance with the Terms. If Dat Technology Inc is unable to verify this then Dat Technology Inc reserve the right to suspend your account.
                                        * you will not use any third party payment processors to accept payments for subscriptions, or any other service, via Sub.Me.
                                    * You are fully responsible for any and all activities that occur on your account and you are responsible for keeping your login details confidential and secure. You agree not to disclose these details to any other person or entity and immediately notify Dat Technology Inc at support@Sub.Me if you believe someone has used or is using your account without your permission or if your account has been subject to any other breach of security. You also agree to ensure that you log out of your account at the end of each session. You should use particular caution when accessing your account from a public or shared computer so that others are not able to access, view or record your password or other personal information.
                                    * Dat Technology Inc reserves the right to disable any user name, password, or other identifier, whether chosen by you or provided by Dat Technology Inc, at any time and at Dat Technology Inc’s sole discretion for any or no reason, including if, in Dat Technology Inc opinion, you have violated any provision of the Terms.
                                * Subscriptions, Purchases and Payment of Revenue
                                    * Dat Technology Inc will procure that Payment Providers ensure that Creators will receive the Commission from Dat Technology Inc with the difference between the Revenue and Commission being a management fee (which will include Incentive Payments) levied by Dat Technology Inc and payments due to the Payment Providers. The management fee is for providing, maintaining and operating the Website. The Commission will be 80% of the Revenue generated by Subs paying to view User Content uploaded by you or use Sub Interaction.
                                    * In order to view User Content or utilise Sub Interaction on Sub.Me, you must first add a payment card to your account and then click the 'Subscribe' button on the relevant Creator’s proDat Technology Ince. Your payment card details will be passed to a Payment Provider which will take payment from your payment card and pay it into Dat Technology Inc’s account.
                                    * Depending on your use of SubMe the Payment Provider will take monthly payments or will take payments for ad hoc purchases such as Sub Interaction. However, you may cancel the monthly payments at any time by turning off the 'Auto-Renew' switch located under the relevant Creator’s User Content proDat Technology Ince or by contacting Dat Technology Inc at support@Sub.Me. If you cancel your monthly payments you will continue to be permitted to view the Creator's User Content until the end of the existing billing period, after which no further payments will be taken from your payment card and you will no longer be able to view the relevant Creator’s User Content.
                                    * Dat Technology Inc receives the Revenue and holds the Commission on behalf of the relevant Creator, and not on your behalf as a Sub. Once Dat Technology Inc has received payment from you as a Sub you have no further liability to the relevant Creator and the Creator shall allow you as a Sub to view the User Content or utilise Sub Interaction.
                                    * Dat Technology Inc will take payment of the Revenue from the Sub and hold the Commission in Dat Technology Inc’s capacity as the agent for the Creator.
                                    * All payments to view User Content or utilise Sub Interaction are final and non-refundable. If Dat Technology Inc is alerted that a Sub has sought and received a Refund or Chargeback, Dat Technology Inc will take additional actions. Any purchase of the right to view User Content or to use Sub Interaction which is subsequently subject to a Refund or Chargeback may result in the User’s account being immediately and permanently excluded from Sub.Me. The Refund or Chargeback amount may be removed from the earning Creator's income. The Creator may be alerted to the Sub Refund or Chargeback.
                                * Wallet Credits
                                    * A Sub can prepay an amount to Dat Technology Inc known as Wallet Credits which the Sub can later use to view User Content/access Sub Interaction on the terms contained within this agreement.
                                    * Wallet Credits are non-transferable; any unused Wallet Credits cannot be withdrawn.
                                    * Once a Sub has applied any of the Wallet Credits in accordance with 5.1 above, the Wallet Credits are non-refundable.
                                    * Purchases on the Website cannot be divided; if a Sub attempts a purchase that is greater than the amount of remaining Wallet Credits, the Sub’s connected payment card will be charged the full amount.
                                    * Wallet Credits are subject to a maximum amount as determined by Dat Technology Inc, from time to time.
                                * TwitterSub.Me allows Users to connect a Twitter account and to post any Sub.Me posts to Twitter. By using this feature, you must fully comply with and respect Twitter's Terms of Service, which can be read in full here: https://twitter.com/tos
                                * Account Deactivation
                                    * Should you wish to deactivate your Sub.Me membership then you may do so in your User Account section.
                                    * If you are a Sub then any account deactivation will take place as soon as reasonably possible. You will no longer be charged or have access to User Content or Sub Interaction. Any subscriptions will be deleted and cannot be subsequently renewed.
                                    * If you are a Creator then you can only deactivate your membership when your last Sub Subscription has expired, and you have withdrawn any balance on your account.
                                    * If a User is both a Creator and a Sub then the account will be deactivated in two stages (Sub and then Creator).
                                    * You will receive an email confirmation upon the successful deletion of your account.
                                * Intellectual Property Rights
                                    * Other than User Content, the Website and its entire contents, features, and functionality (including but not limited to all information, software, text, displays, images, video, and audio, and the design, selection, and arrangement thereof), are owned by Dat Technology Inc, Dat Technology Inc licensors, or other providers of such material and are protected by international copyright, trademark, patent, trade secret, and other intellectual property or proprietary rights laws.
                                    * You must not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on the Website, except as follows:
                                        * you may store Dat Technology Inces that are automatically cached by your Web browser for display enhancement purposes; and
                                        * you may print or download one copy of a reasonable number of pages of the Website for your own personal, non-commercial use and not for further reproduction, publication, or distribution.
                                    * If you print, copy, modify, download, or otherwise use or provide any other person with access to any part of the Website in breach of the Terms, your right to use the Website will end immediately and you must, at Dat Technology Inc option, return or destroy any copies of the materials you have made.
                                    * Other than User Content, no right, title, or interest in or to the Website or any content on the Website is transferred to you, and all rights not expressly granted are reserved by Dat Technology Inc. Any use of the Website not expressly permitted by these Terms is a breach of these Terms and may violate copyright, trademark, and other laws.
                                    * The Sub.Me name, logo and all related names, logos, product and service names, designs, and slogans are trademarks of Dat Technology Inc or Dat Technology Inc afDat Technology Inciates or licensors. You must not use such marks without Dat Technology Inc prior written permission. All other names, logos, product and service names, designs, and slogans on the Website are the trademarks of their respective owners.
                                * Licence
                                    * Subject to all of the terms, conditions, limitations and restrictions contained in these Terms, we grant to you a conditional, revocable, non-transferable, non-sublicensable, non-exclusive and limited licence to use the Website for your own lawful and personal use only. You acknowledge and agree that the foregoing license may be revoked and terminated by Dat Technology Inc at any time and for any reason (including, without limitation, if you violate these Terms or any applicable law). Any use of Sub.Me other than as expressly permitted by these Terms is strictly prohibited. All rights not expressly granted herein are reserved by Dat Technology Inc.
                                    * Dat Technology Inc does not warrant that Sub.Me is compatible with all devices and operating systems. It is your sole responsibility to determine whether or not Sub.Me is compatible with your device.
                                * Acceptable Use
                                    * Dat Technology Inc requires that all Users respect and comply with these Terms below, at all times, when using Sub.Me.
                                    * You may not:
                                        * use Sub.Me other than for your own lawful and personal use in accordance with these Terms;
                                        * impersonate Dat Technology Inc, one of Dat Technology Inc employees, another User, or any other person or entity or falsely state, suggest or otherwise misrepresent any afDat Technology Inciation, endorsement, sponsorship between you and Dat Technology Inc and/or any other person or entity;
                                        * falsify account registration information, or make unauthorized use of another's information or content;
                                        * use Sub.Me in any manner or for any purpose that is illegal or unlawful, including engaging in any activity that violates any right of any person or entity;
                                        * copy, reproduce, distribute, modify, or create derivative works from, any portion of Sub.Me without Dat Technology Inc express written permission;
                                        * use Sub.Me for the purpose of exploiting, harming, or attempting to exploit or harm minors in any way by exposing them to inappropriate content, asking for personally identifiable information, or otherwise;
                                        * transmit, or procure the sending of, any advertising or promotional material, including any “junk mail”, “chain letter”, “spam”, or any other similar solicitation;
                                        * engage in any other conduct that restricts or inhibits anyone’s use or enjoyment of the Website, or which, as determined by Dat Technology Inc, may harm Dat Technology Inc or Users of the Website or expose them to liability;
                                    * You shall not create, upload, post, display, publish or distribute User Content that:
                                        * is obscene, illegal, fraudulent, defamatory, libelous, hateful, discriminatory, threatening or harassing, or in any way which incites violence or violates any of the aforementioned prohibitions;
                                        * violates another's copyright, trademark, right of privacy, right of publicity, or other property or personal right (for example, using the name, likeness, image or other identity of another without proper consent);
                                        * promotes or advertises escort services;
                                        * promotes or advertises firearms or other weapons, drugs, or drug paraphernalia;
                                        * promotes any illegal activity, or advocates, promotes, or assists any unlawful act;
                                        * causes annoyance, inconvenience, or needless anxiety or is likely to upset, embarrass, alarm, or annoy any other person;
                                        * involves 3rd party commercial activities or sales, such as contests, sweepstakes and other sales promotions, barter, or advertising;
                                        * gives the impression that it emanates from or is endorsed by Dat Technology Inc or any other person or entity, if this is not the case.
                                    * You shall not remove, erase, modify or tamper with any copyright, trademark or other proprietary rights notice that is contained in any User Content that you do not own.
                                    * You shall not use the Website in any manner that could disable, overburden, damage, or impair the site or interfere with any other party’s use of the Website, including their ability to engage in real time activities through the Website.
                                    * You shall not decompile, disassemble, reverse engineer, or otherwise attempt to discover or derive the source code of Sub.Me.
                                    * You shall not interfere in any way with the operation of Sub.Me or any server, network or system associated with Sub.Me, including, without limitation: hacking, mail-bombing, flooding, overloading, or making "denial of service" attacks; probing, scanning or testing the vulnerability of the site or any server, network or system associated with the site; breaching or circumventing firewall, encryption, security or authentication routines; accessing information not intended for you, or accessing another user's account that you are not expressly authorized to access.
                                    * You shall not use Sub.Me for any unauthorized purpose, including, without limitation, for purposes of building a competitive product or service, performance or functionality, or for any other competitive purposes;
                                    * You shall not use any automated program, tool or process (including without limitation, web crawlers, robots, bots spiders, and automated scripts) to access Sub.Me or any server, network or system associated with Sub.Me, or to extract, collect, harvest or gather content or information from Sub.Me.
                                    * You shall not make any other use of Sub.Me that violates these Terms or any applicable law.
                                    * Any content posted that is reported by another User or Sub.Me, and that is deemed unacceptable by Dat Technology Inc, will be deleted and the User notified via email. Users who repeatedly violate Dat Technology Inc Acceptable Use policy may be deactivated. If Dat Technology Inc becomes aware that a User is underage, Dat Technology Inc will promptly deactivate that User's account and delete all information and content of that User from Sub.Me. If you are a parent or legal guardian and become aware that your minor-child has registered on Sub.Me, please immediately notify Dat Technology Inc at support@Sub.Me.
                                    * By registering an account with Sub.Me, you represent and warrant that:
                                        * you are at least 18 years of age;
                                        * you will fully comply with these Terms;
                                        * you accept full responsibility for the use of Sub.Me on any device, whether or not it is owned by you;
                                        * you accept full responsibility for any User Content created or provided by you; and
                                        * your use of Sub.Me will not violate these Terms or any applicable law.
                                    * If you are using Sub.Me on behalf of a business or other entity, you warrant that you are authorised to grant all the licences stipulated in or entailed by these Terms and that you are authorised to bind the business or other entity to these Terms.
                                * User Content
                                    * By creating and publishing User Content on Sub.Me, you authorize your Subs to access and view (without downloading or copying) your User Content on Sub.Me for their own lawful and personal use. You also represent, warrant and undertake that for each submission:
                                        * you own, have a valid licence to, or otherwise control all rights in and to your User Content;
                                        * to the extent your User Content includes or utilises any third-party property, you have secured all rights, licenses, written consents and releases that are necessary for the use of such third-party property in your User Content;
                                        * you will not post any content depicting any person under 18-years old,
                                        * you have inspected and are maintaining written documentation sufficient to confirm that all subjects of your submission are in fact 18-years old or older; and
                                        * your User Content is non-confidential and will be made available to your Subs on Sub.Me.
                                    * You grant Dat Technology Inc and Our licensees, successors, and assigns the right to use, reproduce, modify, perform, display, distribute, and otherwise disclose to third parties any such material.For clarification: The clause exists so that we may use your content by adding stickers, text, and watermarks, and to make your content available to Users, as well as for other normal operations of our website. We will never sell your content to other platforms.
                                    * You understand and acknowledge that you are responsible for any User Content you submit or contribute, and you have full responsibility for such content, including its legality, reliability, accuracy, and appropriateness.
                                    * You shall indemnify Dat Technology Inc, Dat Technology Inc’s licensees, successors, and assigns against all liabilities, costs, expenses, damages and losses (including any direct, indirect or consequential losses, loss of profit, loss of reputation and all interest, penalties and legal costs (calculated on a full indemnity basis) and all other reasonable professional costs and expenses suffered or incurred arising out of or in connection with your User Content.
                                    * Dat Technology Inc is not responsible or liable to any third party for the content or accuracy of any User Content posted by you or any other user of the Website.
                                    * Upon signing up to Sub.Me, you also agree to act as custodian of records for the content that you upload to Sub.Me.
                                    * Any questions regarding User Content can be addressed by emailing support@Sub.Me.
                                * DMCA
                                    * Sub.Me respects the intellectual property rights of third parties and voluntarily complies with the Digital Millennium Copyright Act (DMCA). Our full DMCA Notice and Takedown Policy can be found here: https://Sub.Me/dmca. Sub.Me has implemented a policy to terminate repeat copyright infringers. A copy of our repeat infringer policy (RIP) is available upon request to our users.
                                    * Please note that, under the DMCA, any person who knowingly makes material misrepresentations in a notification of claimed infringement or in a counter-notification may be liable for damages.
                                * Linking to the Website and Social Media Features
                                    * You may link to Dat Technology Inc homepage, provided you do so in a way that is fair and legal and does not damage Dat Technology Inc reputation or take advantage of it, but you must not establish a link in such a way as to suggest any form of association, approval, or endorsement on Dat Technology Inc part.
                                    * The Website may provide certain social media features that enable you to:
                                        * link from your own or certain third-party websites to certain content on the Website;
                                        * send emails or other communications with certain content, or links to certain content, on the Website;
                                        * cause limited portions of content on this Website to be displayed or appear to be displayed on your own or certain third-party websites.
                                    * You may use these features solely as they are provided by Dat Technology Inc, solely with respect to the content they are displayed with. However, you must not:
                                        * establish a link from any website that is not owned by you;
                                        * 12.3.2 cause the Website or portions of it to be displayed on, or appear to be displayed by, any other site, for example, framing, deep linking, or in-line linking;
                                        * link to any part of the Website other than the homepage; or
                                        * otherwise take any action with respect to the materials on this Website that is inconsistent with any other provision of these Terms.
                                    * You agree to cooperate with Dat Technology Inc in causing any unauthorised framing or linking immediately to stop. Dat Technology Inc reserves the right to withdraw linking permission without notice.
                                    * Dat Technology Inc may disable all or any social media features and any links at any time without notice in Dat Technology Inc discretion.
                                * Links from the WebsiteIf the Website contains links to other sites and resources provided by third parties, these links are provided for your convenience only. This includes links contained in advertisements, including, without limitation, banner advertisements and sponsored links. Dat Technology Inc has no control over the contents of those sites or resources, and accepts no responsibility for them or for any loss or damage that may arise from your use of them. If you decide to access any of the third-party websites linked to this Website, you do so entirely at your own risk and subject to the terms and conditions of use for such websites.
                                * Referral Program
                                    * Dat Technology Inc offers a referral program which incentivises Users to introduce to Sub.Me people who are interested in becoming Users. This clause sets out when Dat Technology Inc will pay an Incentive Payment. Dat Technology Inc reserves the right to change the how it pays Incentive Payments but no change will deprive any Users of Incentive Payments already earned under before the changes came into effect:
                                        * Users with a valid User Account with Sub.Me can participate;
                                        * each User Account has a unique referral URL which allows Users to earn Incentive Payments;
                                        * the referred User must use the referring User’s URL and then register with Sub.Me using the same browser that they used to click the referral link;
                                        * the referred User has to be someone who has never held a User Account. If the referred User has been or is an existing User Dat Technology Inc will not pay Incentive Payments to the referring User;
                                        * Dat Technology Inc will not pay Incentive Payments if the referred User does not join Sub.Me using the correct referral link;
                                        * if the referred User then sets up more than one new User Account then the obligation to pay Incentive Payments shall only apply to Commissions earned from the first User Account. The referred User will only be a new User with respect to the first User Account.
                                        * Users may not use confusing business practices to impersonate Sub.Me with the intention to refer other Users to receive Incentive Payments.More information on how the Referral Programme works can be found at: https://Sub.Me/help/3/22/90
                                    * If it transpires that Incentive Payments have been made incorrectly then Dat Technology Inc reserves the right to recover those monies from the referring User.
                                    * In order to ensure that the referral program is not abused Dat Technology Inc reserves the right to verify the credentials and identity of referred Users and referring Users claiming to have introduced the referred Users.
                                    * The Incentive Payment will be processed on the first calendar business day of each month and paid in accordance with the Payment Provider’s terms.
                                    * The Incentive Payment is deducted from the monies that Dat Technology Inc would retain from the transaction and not from the monies earned by the referred User.
                                * Disclaimer of Warranties; Limitations of Liability
                                    * By using Sub.Me, you acknowledge and agree as follows:
                                        * Sub.Me and all of its services and features are provided without warranties of any kind, express or implied. To the fullest extent permitted by law, Dat Technology Inc disclaim any and all warranties, express or implied, with respect to Sub.Me and all of its services and features, including, and without limitation, implied warranties of merchantability and fitness for a particular purpose. Dat Technology Inc does not warrant or guarantee the accuracy, usefulness, completeness or reliability of Sub.Me, or the results of your use of Sub.Me. Dat Technology Inc disclaim all liability and responsibility arising from any reliance placed on such materials by you or any other visitor to the Website, or by anyone who may be informed of any of its contents. Dat Technology Inc also do not warrant or guarantee that Sub.Me and all of its services and features will be available at any particular time or location; that Sub.Me and all of its services and features will be secure, uninterrupted, and error-free; that any defect or error will be corrected; or that Sub.Me and all of its services and features will be free of viruses and other harmful components. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for antivirus protection and accuracy of data input and output, and for maintaining a means external to the Website for any reconstruction of any lost data. To the fullest extent provided by law, Dat Technology Inc will not be liable for any loss or damage caused by a distributed denial-of-service attack, viruses, or other technologically harmful material that may infect your computer equipment, computer programs, data, or other proprietary material due to your use of the Website or any services or items obtained through the Website or to your downloading of any material posted on it, or on any website linked to it. Your use of Sub.Me and its services and features will be solely and entirely at your own risk. The foregoing does not affect any warranties that cannot be excluded or limited under applicable law;
                                        * Dat Technology Inc does not warrant or guarantee that use of the Website will be uninterrupted or error free twenty-four hours a day, seven days a week, since Dat Technology Inc may need to carry out maintenance of the Website from time to time. However, Dat Technology Inc will use its reasonable endeavours to carry out any such maintenance of the Website outside of business hours (between 09:00 and 17:00 UK time) and Dat Technology Inc will endeavour to give reasonable notice, however this may not always be possible;
                                        * in no event shall Dat Technology Inc be liable (strictly or otherwise) in contract, tort, negligence, strict liability or under any other legal or equitable principle, for any indirect, incidental, exemplary, special, punitive or consequential damages (including, and without limitation, loss of use, profits, data or information, or loss of business goodwill or opportunity) arising out of or related to your use of (or your inability to use) Sub.Me or any of its services or features, nor shall Dat Technology Inc be held liable in the event your User Content is illegally distributed by another User, however where such distribution does occur please contact Dat Technology Inc at support@Sub.Me and Dat Technology Inc will seek to prevent continuance of such distribution where Dat Technology Inc is reasonably able to do so; and
                                        * in no event shall Dat Technology Inc total and aggregate liability to you and/or others for any and all claims arising out of or related to your use of (or your inability to use) Sub.Me or any of its services or features, exceed one hundred pounds sterling (£100.00). This does not affect any liability that cannot be excluded or limited under applicable law.
                                    * Because some jurisdictions do not allow the exclusion or limitation of liability for consequential or incidental damages or total liability, the above limitation may not apply to you. In such case, our total and aggregate liability to you arising out of or related to your use of (or your inability to use) Sub.Me or any of its services or features shall be limited to the maximum extent permitted by law or, if no amount is specified, one hundred pounds sterling (£100.00).
                                * User indemnification
                                    * By using Sub.Me, you agree to indemnify and hold harmless Dat Technology Inc and our employees, agents, representatives, successors and assigns from and against any and all claims, demands, causes of action, actions, suits, proceedings, judgments, orders, damages, liabilities, losses, costs and expenses (including, without limitation, reasonable attorneys' fees and legal costs) arising out of or related to any of the following:
                                        * your use of Sub.Me or any of its services or features;
                                        * any User Content created, published, or otherwise made available on Sub.Me by you;
                                        * any transaction or interaction between you and any other User of Sub.Me; and/or
                                        * your violation of the Terms or any applicable law.
                                    * Notwithstanding Dat Technology Inc’s appointment as the Creator’s agent to pay the Creator Commission, Dat Technology Inc, the Sub and Creator are independent contractors and are responsible for meeting all of their respective legal or statutory obligations. This extends to the payment of any taxes or other payments properly demanded by a regulatory authority. Should a User fail to meet those obligations then the User shall indemnify Dat Technology Inc for any loss or expense, including management time that is as a consequence incurred by Dat Technology Inc.
                                * Governing Law and Dispute Resolution
                                    * You and Dat Technology Inc agree that these Terms shall be governed by and construed in accordance with the laws of England and Wales (without regard to the conflict of laws provisions thereof) and that any dispute between you and Dat Technology Inc concerning Sub.Me or arising out of or related to these Terms shall be resolved exclusively in the courts of England and Wales.
                                    * Except where prohibited by applicable law, any claim or cause of action by you concerning Sub.Me or arising out of or related to these Terms must be Dat Technology Inced within one year after such claim or cause of action arose, or be forever barred.
                                * Waiver and Severability
                                    * No waiver of any term or condition set out in these Terms shall be deemed a further or continuing waiver of such term or condition or a waiver of any other term or condition, and any failure to assert a right or provision under these Terms shall not constitute a waiver of such right or provision.
                                    * If any provision of these Terms is held by a court or other tribunal of competent jurisdiction to be invalid, illegal or unenforceable for any reason, such provision shall be eliminated or limited to the minimum extent such that the remaining provisions of the Terms will continue in full force and effect.
                                * General
                                    * The Terms constitute the sole and entire agreement between you and Dat Technology Inc regarding the Website and supersede all prior and contemporaneous understandings, agreements, representations, and warranties, both written and oral, regarding the Website.
                                    * The Contracts (Rights of Third Parties) Act 1999 is excluded.
                                * ContactIf you have any questions, comments, complaints or concerns about Sub.Me, please contact our support team at support@Sub.Me

                            <div style={{marginTop: "1.424em"}}>
                                <input type="checkBox" name="ageVerification" style={{marginRight: "1em"}}></input>
                                <label for="ageVerification" style={{color: "white"}}>I AGREE</label>
                            </div>
                            <div style={{marginTop: ".5em"}}>
                                <input type="checkBox" name="ageVerification" style={{marginRight: "1em"}}></input>
                                <label for="ageVerification" style={{color: "white"}}>Double Pinky Swear I AGREE</label>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button 
                            variant="secondary" 
                            onClick={() => setShow(false)}
                            variant='light'
                        >
                            cancel
                        </Button>
                        <Button 
                            variant="light"
                            onClick={() => setNextStep(true)}
                        >
                            continue
                        </Button>
                    </Modal.Footer>
                </div>
            </Modal>
        </div>
    );
}