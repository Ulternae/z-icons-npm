import React from 'react';

export interface LanChartRadarRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartRadarRegular: React.FC<LanChartRadarRegularProps>;
export default LanChartRadarRegular;
