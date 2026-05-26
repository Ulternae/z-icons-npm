import React from 'react';

export interface LanFileChartPieRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileChartPieRegular: React.FC<LanFileChartPieRegularProps>;
export default LanFileChartPieRegular;
