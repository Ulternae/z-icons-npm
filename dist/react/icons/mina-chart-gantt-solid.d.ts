import React from 'react';

export interface MinaChartGanttSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartGanttSolid: React.FC<MinaChartGanttSolidProps>;
export default MinaChartGanttSolid;
