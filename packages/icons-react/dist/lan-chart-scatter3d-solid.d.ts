import React from 'react';

export interface LanChartScatter3dSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartScatter3dSolid: React.FC<LanChartScatter3dSolidProps>;
export default LanChartScatter3dSolid;
