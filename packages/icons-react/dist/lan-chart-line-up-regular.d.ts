import React from 'react';

export interface LanChartLineUpRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineUpRegular: React.FC<LanChartLineUpRegularProps>;
export default LanChartLineUpRegular;
