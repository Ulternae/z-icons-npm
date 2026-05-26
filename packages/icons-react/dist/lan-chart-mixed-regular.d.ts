import React from 'react';

export interface LanChartMixedRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartMixedRegular: React.FC<LanChartMixedRegularProps>;
export default LanChartMixedRegular;
