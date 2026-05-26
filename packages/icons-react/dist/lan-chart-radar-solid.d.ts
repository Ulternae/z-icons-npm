import React from 'react';

export interface LanChartRadarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartRadarSolid: React.FC<LanChartRadarSolidProps>;
export default LanChartRadarSolid;
