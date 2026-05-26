import React from 'react';

export interface LanChartColumnRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartColumnRegular: React.FC<LanChartColumnRegularProps>;
export default LanChartColumnRegular;
