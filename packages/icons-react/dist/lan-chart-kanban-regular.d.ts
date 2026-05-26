import React from 'react';

export interface LanChartKanbanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartKanbanRegular: React.FC<LanChartKanbanRegularProps>;
export default LanChartKanbanRegular;
