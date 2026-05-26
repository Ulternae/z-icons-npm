import React from 'react';

export interface LanChartLineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLine: React.FC<LanChartLineProps>;
export default LanChartLine;
