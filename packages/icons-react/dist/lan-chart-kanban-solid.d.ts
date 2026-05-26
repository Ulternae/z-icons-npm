import React from 'react';

export interface LanChartKanbanSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartKanbanSolid: React.FC<LanChartKanbanSolidProps>;
export default LanChartKanbanSolid;
