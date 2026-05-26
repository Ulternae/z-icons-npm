import React from 'react';

export interface LanChartWaterfallSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartWaterfallSolid: React.FC<LanChartWaterfallSolidProps>;
export default LanChartWaterfallSolid;
