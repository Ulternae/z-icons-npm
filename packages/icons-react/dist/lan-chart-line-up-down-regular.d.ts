import React from 'react';

export interface LanChartLineUpDownRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineUpDownRegular: React.FC<LanChartLineUpDownRegularProps>;
export default LanChartLineUpDownRegular;
