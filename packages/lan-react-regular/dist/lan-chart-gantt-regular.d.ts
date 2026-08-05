import React from 'react';

export interface LanChartGanttRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartGanttRegular(props: LanChartGanttRegularProps): React.ReactElement;
export default LanChartGanttRegular;
