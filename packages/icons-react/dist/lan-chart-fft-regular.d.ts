import React from 'react';

export interface LanChartFftRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartFftRegular: React.FC<LanChartFftRegularProps>;
export default LanChartFftRegular;
