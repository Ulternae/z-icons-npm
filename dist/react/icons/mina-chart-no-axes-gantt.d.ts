import React from 'react';

export interface MinaChartNoAxesGanttProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartNoAxesGantt: React.FC<MinaChartNoAxesGanttProps>;
export default MinaChartNoAxesGantt;
