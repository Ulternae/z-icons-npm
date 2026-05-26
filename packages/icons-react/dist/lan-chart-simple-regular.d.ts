import React from 'react';

export interface LanChartSimpleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartSimpleRegular: React.FC<LanChartSimpleRegularProps>;
export default LanChartSimpleRegular;
