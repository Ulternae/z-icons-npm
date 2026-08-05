import React from 'react';

export interface LanChartGanttProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartGantt(props: LanChartGanttProps): React.ReactElement;
export default LanChartGantt;
