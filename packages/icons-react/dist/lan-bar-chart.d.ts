import React from 'react';

export interface LanBarChartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarChart: React.FC<LanBarChartProps>;
export default LanBarChart;
