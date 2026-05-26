import React from 'react';

export interface LanChartKanbanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartKanbanThin: React.FC<LanChartKanbanThinProps>;
export default LanChartKanbanThin;
