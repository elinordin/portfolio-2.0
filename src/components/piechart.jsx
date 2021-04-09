import React from 'react';
import { ResponsivePie } from '@nivo/pie'


function Piechart({ data }) {
    return (
        <ResponsivePie
            data={data}
            valueFormat=" > ,.0~%"
            startAngle={-180}
            innerRadius={0.6}
            padAngle={1}
            colors={{ scheme: 'yellow_green_blue' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', '0.5']] }}
            radialLabelsTextXOffset={4}
            radialLabelsTextColor="#323232"
            radialLabelsLinkDiagonalLength={11}
            radialLabelsLinkHorizontalLength={20}
            radialLabelsLinkStrokeWidth={2}
            radialLabelsLinkColor={{ from: 'color' }}
            sliceLabelsTextColor="#323232"
            legends={[]}
        />
    );
}

export default Piechart;