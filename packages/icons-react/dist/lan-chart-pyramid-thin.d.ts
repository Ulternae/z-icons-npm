import React from 'react';

export interface LanChartPyramidThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPyramidThin: React.FC<LanChartPyramidThinProps>;
export default LanChartPyramidThin;
