import React from 'react';

export interface LanChartMixedThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartMixedThin: React.FC<LanChartMixedThinProps>;
export default LanChartMixedThin;
