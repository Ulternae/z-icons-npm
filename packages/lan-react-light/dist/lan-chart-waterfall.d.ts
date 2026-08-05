import React from 'react';

export interface LanChartWaterfallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartWaterfall(props: LanChartWaterfallProps): React.ReactElement;
export default LanChartWaterfall;
