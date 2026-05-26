import React from 'react';

export interface LanChartLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineSolid: React.FC<LanChartLineSolidProps>;
export default LanChartLineSolid;
