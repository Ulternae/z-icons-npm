import React from 'react';

export interface LanChartPieAltSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPieAltSolid: React.FC<LanChartPieAltSolidProps>;
export default LanChartPieAltSolid;
