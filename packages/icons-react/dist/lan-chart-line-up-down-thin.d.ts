import React from 'react';

export interface LanChartLineUpDownThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineUpDownThin: React.FC<LanChartLineUpDownThinProps>;
export default LanChartLineUpDownThin;
