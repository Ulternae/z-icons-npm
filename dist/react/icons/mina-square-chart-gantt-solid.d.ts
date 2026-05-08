import React from 'react';

export interface MinaSquareChartGanttSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSquareChartGanttSolid: React.FC<MinaSquareChartGanttSolidProps>;
export default MinaSquareChartGanttSolid;
