import React from 'react';

export interface LanChartUserRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartUserRegular: React.FC<LanChartUserRegularProps>;
export default LanChartUserRegular;
