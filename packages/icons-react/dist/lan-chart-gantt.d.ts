import React from 'react';

export interface LanChartGanttProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartGantt: React.FC<LanChartGanttProps>;
export default LanChartGantt;
