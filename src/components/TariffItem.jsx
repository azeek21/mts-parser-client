import React from 'react';
import TariffCharacteristic from "./TariffCharacteristic";
import TariffBenefit from "./TariffBenefit";
import "./styles/File.css"

const TariffItem = (props) => {
    return (
        <div className="file">
            <div dangerouslySetInnerHTML={{__html: "Type: " + props.props.type}}/>
            <div dangerouslySetInnerHTML={{__html: "Name: " + props.props.name}}/>
            <div dangerouslySetInnerHTML={{__html: "Description: " + props.props.description}}/>
            <div dangerouslySetInnerHTML={{__html: "Fee: " + props.props.fee}}/>
            <div dangerouslySetInnerHTML={{__html: "Fee with discount: " + props.props.discountFee}}/>
            <div dangerouslySetInnerHTML={{__html: "Annotation: " + props.props.feeAnnotation}}/>
            Characteristics:
            {
                props.props.characteristics.length > 0 ?
                    <div>
                        {
                            props.props.characteristics.map(characteristic => <TariffCharacteristic
                                props={characteristic}/>)
                        }
                    </div>
                    :
                    <div>-</div>
            }
            Benefits:
            {
                props.props.benefits.length > 0 ?
                    <div>
                        {
                            props.props.benefits.map(benefit => <TariffBenefit props={benefit}/>)
                        }
                    </div>
                    :
                    <div>-</div>
            }
        </div>
    );
};

export default TariffItem;