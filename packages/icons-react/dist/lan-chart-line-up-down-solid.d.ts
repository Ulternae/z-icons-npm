import React from 'react';

export interface LanChartLineUpDownSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineUpDownSolid: React.FC<LanChartLineUpDownSolidProps>;
export default LanChartLineUpDownSolid;
