import React from 'react';

export interface LanChartGanttSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartGanttSolid: React.FC<LanChartGanttSolidProps>;
export default LanChartGanttSolid;
