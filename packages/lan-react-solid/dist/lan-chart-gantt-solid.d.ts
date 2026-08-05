import React from 'react';

export interface LanChartGanttSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartGanttSolid(props: LanChartGanttSolidProps): React.ReactElement;
export default LanChartGanttSolid;
