import React from 'react';

export interface LanChartPieAltThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPieAltThin: React.FC<LanChartPieAltThinProps>;
export default LanChartPieAltThin;
