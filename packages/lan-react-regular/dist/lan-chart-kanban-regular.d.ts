import React from 'react';

export interface LanChartKanbanRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartKanbanRegular(props: LanChartKanbanRegularProps): React.ReactElement;
export default LanChartKanbanRegular;
