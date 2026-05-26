import React from 'react';

export interface LanChartLineDownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineDownRegular: React.FC<LanChartLineDownRegularProps>;
export default LanChartLineDownRegular;
