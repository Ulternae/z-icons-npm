import React from 'react';

export interface MinaChartGanttProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartGantt(props: MinaChartGanttProps): React.ReactElement;
export default MinaChartGantt;
