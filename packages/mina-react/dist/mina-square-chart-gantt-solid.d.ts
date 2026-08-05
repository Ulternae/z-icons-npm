import React from 'react';

export interface MinaSquareChartGanttSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaSquareChartGanttSolid(props: MinaSquareChartGanttSolidProps): React.ReactElement;
export default MinaSquareChartGanttSolid;
