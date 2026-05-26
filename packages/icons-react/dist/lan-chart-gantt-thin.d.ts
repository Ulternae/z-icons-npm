import React from 'react';

export interface LanChartGanttThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartGanttThin: React.FC<LanChartGanttThinProps>;
export default LanChartGanttThin;
