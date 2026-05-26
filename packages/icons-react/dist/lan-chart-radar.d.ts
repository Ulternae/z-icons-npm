import React from 'react';

export interface LanChartRadarProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartRadar: React.FC<LanChartRadarProps>;
export default LanChartRadar;
