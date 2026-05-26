import React from 'react';

export interface LanChartRadarThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartRadarThin: React.FC<LanChartRadarThinProps>;
export default LanChartRadarThin;
