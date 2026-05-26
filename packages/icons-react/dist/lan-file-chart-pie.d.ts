import React from 'react';

export interface LanFileChartPieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileChartPie: React.FC<LanFileChartPieProps>;
export default LanFileChartPie;
