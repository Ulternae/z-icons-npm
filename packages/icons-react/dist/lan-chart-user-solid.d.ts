import React from 'react';

export interface LanChartUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartUserSolid: React.FC<LanChartUserSolidProps>;
export default LanChartUserSolid;
