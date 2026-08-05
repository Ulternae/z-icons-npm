import React from 'react';

export interface MinaSquareChartGanttProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSquareChartGantt(props: MinaSquareChartGanttProps): React.ReactElement;
export default MinaSquareChartGantt;
