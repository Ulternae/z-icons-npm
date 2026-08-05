import React from 'react';

export interface LanBarChartProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBarChart(props: LanBarChartProps): React.ReactElement;
export default LanBarChart;
