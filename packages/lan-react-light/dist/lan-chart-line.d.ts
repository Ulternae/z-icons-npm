import React from 'react';

export interface LanChartLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartLine(props: LanChartLineProps): React.ReactElement;
export default LanChartLine;
