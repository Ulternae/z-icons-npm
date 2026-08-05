import React from 'react';

export interface LanChartGanttThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartGanttThin(props: LanChartGanttThinProps): React.ReactElement;
export default LanChartGanttThin;
