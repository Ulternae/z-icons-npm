import React from 'react';

export interface LanChartLineUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineUpThin: React.FC<LanChartLineUpThinProps>;
export default LanChartLineUpThin;
