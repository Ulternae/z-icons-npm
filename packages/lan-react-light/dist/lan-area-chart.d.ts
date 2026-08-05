import React from 'react';

export interface LanAreaChartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAreaChart(props: LanAreaChartProps): React.ReactElement;
export default LanAreaChart;
