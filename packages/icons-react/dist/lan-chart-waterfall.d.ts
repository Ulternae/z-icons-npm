import React from 'react';

export interface LanChartWaterfallProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartWaterfall: React.FC<LanChartWaterfallProps>;
export default LanChartWaterfall;
