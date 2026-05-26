import React from 'react';

export interface LanChartMixedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartMixedSolid: React.FC<LanChartMixedSolidProps>;
export default LanChartMixedSolid;
