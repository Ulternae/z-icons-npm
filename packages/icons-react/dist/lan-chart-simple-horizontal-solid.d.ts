import React from 'react';

export interface LanChartSimpleHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartSimpleHorizontalSolid: React.FC<LanChartSimpleHorizontalSolidProps>;
export default LanChartSimpleHorizontalSolid;
