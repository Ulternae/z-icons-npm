import React from 'react';

export interface LanChartPieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPieSolid: React.FC<LanChartPieSolidProps>;
export default LanChartPieSolid;
