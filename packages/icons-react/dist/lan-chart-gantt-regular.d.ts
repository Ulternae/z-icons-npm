import React from 'react';

export interface LanChartGanttRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartGanttRegular: React.FC<LanChartGanttRegularProps>;
export default LanChartGanttRegular;
