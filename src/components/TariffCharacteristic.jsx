import React from 'react';

const TariffCharacteristic = (props) => {
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: "* " + props.props.title}}/>
        </div>
    );
};

export default TariffCharacteristic;