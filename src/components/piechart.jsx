import React from 'react';
import { ResponsivePie } from '@nivo/pie'


function Piechart({ data }) {
    return (
        <ResponsivePie
            data={data}
            sortByValue={true}
            height={100}
            margin={{top:0, right:0, left:0, bottom:0}}
            startAngle={-180}
            innerRadius={0.35}
            padAngle={1}
            fit={false}
            colors={{ datum: 'data.color' }}
            borderWidth={1}
            borderColor={{ from: 'color', modifiers: [['darker', '0.5']] }}
            enableRadialLabels={false}
            sliceLabel='id'
            sliceLabelsRadiusOffset={0.5}
            sliceLabelsSkipAngle={15}
            sliceLabelsTextColor='#FFFFFF'
            legends={[]}
        />
    );
}

export default Piechart;