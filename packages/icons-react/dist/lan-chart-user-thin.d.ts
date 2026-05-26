import React from 'react';

export interface LanChartUserThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartUserThin: React.FC<LanChartUserThinProps>;
export default LanChartUserThin;
