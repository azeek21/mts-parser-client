import React from 'react';

const TariffBenefit = (props) => {
    return (
        <div>
            <div dangerouslySetInnerHTML={{__html: "* " + props.props.description}}/>
        </div>
    );
};

export default TariffBenefit;