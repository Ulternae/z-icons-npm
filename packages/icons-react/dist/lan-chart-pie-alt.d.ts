import React from 'react';

export interface LanChartPieAltProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPieAlt: React.FC<LanChartPieAltProps>;
export default LanChartPieAlt;
