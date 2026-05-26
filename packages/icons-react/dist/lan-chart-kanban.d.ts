import React from 'react';

export interface LanChartKanbanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartKanban: React.FC<LanChartKanbanProps>;
export default LanChartKanban;
