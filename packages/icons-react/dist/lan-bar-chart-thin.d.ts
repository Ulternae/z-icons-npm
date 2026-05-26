import React from 'react';

export interface LanBarChartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarChartThin: React.FC<LanBarChartThinProps>;
export default LanBarChartThin;
