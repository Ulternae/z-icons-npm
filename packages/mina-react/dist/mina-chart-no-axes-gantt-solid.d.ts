import React from 'react';

export interface MinaChartNoAxesGanttSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartNoAxesGanttSolid(props: MinaChartNoAxesGanttSolidProps): React.ReactElement;
export default MinaChartNoAxesGanttSolid;
