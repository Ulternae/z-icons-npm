import React from 'react';

export interface LanFileChartLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileChartLineSolid: React.FC<LanFileChartLineSolidProps>;
export default LanFileChartLineSolid;
