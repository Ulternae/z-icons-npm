import React from 'react';

export interface LanChartLineDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineDownThin: React.FC<LanChartLineDownThinProps>;
export default LanChartLineDownThin;
