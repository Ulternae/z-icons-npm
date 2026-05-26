import React from 'react';

export interface LanChartSineProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartSine: React.FC<LanChartSineProps>;
export default LanChartSine;
