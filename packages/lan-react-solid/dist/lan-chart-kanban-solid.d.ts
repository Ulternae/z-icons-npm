import React from 'react';

export interface LanChartKanbanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartKanbanSolid(props: LanChartKanbanSolidProps): React.ReactElement;
export default LanChartKanbanSolid;
