import React from 'react';

export interface LanFileChartPieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileChartPieSolid: React.FC<LanFileChartPieSolidProps>;
export default LanFileChartPieSolid;
