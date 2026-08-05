import React from 'react';

export interface LanFileChartLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileChartLine(props: LanFileChartLineProps): React.ReactElement;
export default LanFileChartLine;
