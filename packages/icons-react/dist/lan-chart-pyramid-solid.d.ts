import React from 'react';

export interface LanChartPyramidSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPyramidSolid: React.FC<LanChartPyramidSolidProps>;
export default LanChartPyramidSolid;
