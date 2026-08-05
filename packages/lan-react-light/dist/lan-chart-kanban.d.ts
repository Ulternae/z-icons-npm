import React from 'react';

export interface LanChartKanbanProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartKanban(props: LanChartKanbanProps): React.ReactElement;
export default LanChartKanban;
