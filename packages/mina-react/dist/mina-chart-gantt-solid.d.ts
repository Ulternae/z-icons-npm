import React from 'react';

export interface MinaChartGanttSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartGanttSolid(props: MinaChartGanttSolidProps): React.ReactElement;
export default MinaChartGanttSolid;
