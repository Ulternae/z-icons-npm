import React from 'react';

export interface LanChartScatterRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartScatterRegular: React.FC<LanChartScatterRegularProps>;
export default LanChartScatterRegular;
