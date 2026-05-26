import React from 'react';

export interface LanChartMixedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartMixed: React.FC<LanChartMixedProps>;
export default LanChartMixed;
