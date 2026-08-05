import React from 'react';

export interface LanChartColumnProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartColumn(props: LanChartColumnProps): React.ReactElement;
export default LanChartColumn;
