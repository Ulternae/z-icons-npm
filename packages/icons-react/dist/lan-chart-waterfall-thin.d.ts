import React from 'react';

export interface LanChartWaterfallThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartWaterfallThin: React.FC<LanChartWaterfallThinProps>;
export default LanChartWaterfallThin;
