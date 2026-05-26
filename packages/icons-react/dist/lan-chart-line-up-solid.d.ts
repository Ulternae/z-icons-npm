import React from 'react';

export interface LanChartLineUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineUpSolid: React.FC<LanChartLineUpSolidProps>;
export default LanChartLineUpSolid;
