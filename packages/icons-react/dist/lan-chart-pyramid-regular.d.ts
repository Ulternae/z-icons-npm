import React from 'react';

export interface LanChartPyramidRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPyramidRegular: React.FC<LanChartPyramidRegularProps>;
export default LanChartPyramidRegular;
