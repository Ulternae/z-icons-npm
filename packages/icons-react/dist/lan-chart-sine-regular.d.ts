import React from 'react';

export interface LanChartSineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartSineRegular: React.FC<LanChartSineRegularProps>;
export default LanChartSineRegular;
