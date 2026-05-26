import React from 'react';

export interface LanBarChartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarChartRegular: React.FC<LanBarChartRegularProps>;
export default LanBarChartRegular;
