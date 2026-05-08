import React from 'react';

export interface MinaChartNoAxesGanttSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartNoAxesGanttSolid: React.FC<MinaChartNoAxesGanttSolidProps>;
export default MinaChartNoAxesGanttSolid;
