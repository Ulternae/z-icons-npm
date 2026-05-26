import React from 'react';

export interface LanAreaChartRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAreaChartRegular: React.FC<LanAreaChartRegularProps>;
export default LanAreaChartRegular;
