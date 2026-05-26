import React from 'react';

export interface LanChartLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineRegular: React.FC<LanChartLineRegularProps>;
export default LanChartLineRegular;
