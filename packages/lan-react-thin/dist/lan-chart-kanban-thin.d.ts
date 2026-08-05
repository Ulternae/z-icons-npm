import React from 'react';

export interface LanChartKanbanThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartKanbanThin(props: LanChartKanbanThinProps): React.ReactElement;
export default LanChartKanbanThin;
