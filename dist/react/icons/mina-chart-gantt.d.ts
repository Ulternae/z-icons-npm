import React from 'react';

export interface MinaChartGanttProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartGantt: React.FC<MinaChartGanttProps>;
export default MinaChartGantt;
