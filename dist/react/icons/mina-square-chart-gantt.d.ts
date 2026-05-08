import React from 'react';

export interface MinaSquareChartGanttProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaSquareChartGantt: React.FC<MinaSquareChartGanttProps>;
export default MinaSquareChartGantt;
