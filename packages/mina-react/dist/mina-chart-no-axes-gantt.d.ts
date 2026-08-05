import React from 'react';

export interface MinaChartNoAxesGanttProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartNoAxesGantt(props: MinaChartNoAxesGanttProps): React.ReactElement;
export default MinaChartNoAxesGantt;
