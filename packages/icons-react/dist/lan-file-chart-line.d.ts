import React from 'react';

export interface LanFileChartLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileChartLine: React.FC<LanFileChartLineProps>;
export default LanFileChartLine;
