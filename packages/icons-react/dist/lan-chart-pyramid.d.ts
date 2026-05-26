import React from 'react';

export interface LanChartPyramidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPyramid: React.FC<LanChartPyramidProps>;
export default LanChartPyramid;
