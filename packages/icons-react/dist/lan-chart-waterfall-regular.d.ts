import React from 'react';

export interface LanChartWaterfallRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartWaterfallRegular: React.FC<LanChartWaterfallRegularProps>;
export default LanChartWaterfallRegular;
