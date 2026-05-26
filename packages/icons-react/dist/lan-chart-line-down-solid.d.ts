import React from 'react';

export interface LanChartLineDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineDownSolid: React.FC<LanChartLineDownSolidProps>;
export default LanChartLineDownSolid;
