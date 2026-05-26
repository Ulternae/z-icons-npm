import React from 'react';

export interface LanFileChartLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileChartLineRegular: React.FC<LanFileChartLineRegularProps>;
export default LanFileChartLineRegular;
