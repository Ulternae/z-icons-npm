import React from 'react';

export interface LanChartTreeMapRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartTreeMapRegular: React.FC<LanChartTreeMapRegularProps>;
export default LanChartTreeMapRegular;
