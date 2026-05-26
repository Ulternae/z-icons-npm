import React from 'react';

export interface LanChartPieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPieRegular: React.FC<LanChartPieRegularProps>;
export default LanChartPieRegular;
