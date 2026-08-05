import React from 'react';

export interface LanMagnifyingGlassChartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanMagnifyingGlassChart(props: LanMagnifyingGlassChartProps): React.ReactElement;
export default LanMagnifyingGlassChart;
