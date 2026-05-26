import React from 'react';

export interface LanAreaChartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAreaChart: React.FC<LanAreaChartProps>;
export default LanAreaChart;
