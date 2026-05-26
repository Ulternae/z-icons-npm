import React from 'react';

export interface LanChartTreeMapSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartTreeMapSolid: React.FC<LanChartTreeMapSolidProps>;
export default LanChartTreeMapSolid;
