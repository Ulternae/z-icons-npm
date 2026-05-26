import React from 'react';

export interface LanMagnifyingGlassChartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMagnifyingGlassChart: React.FC<LanMagnifyingGlassChartProps>;
export default LanMagnifyingGlassChart;
