import React from 'react';

export interface LanChartPieProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPie: React.FC<LanChartPieProps>;
export default LanChartPie;
