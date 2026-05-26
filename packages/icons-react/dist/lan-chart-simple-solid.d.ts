import React from 'react';

export interface LanChartSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartSimpleSolid: React.FC<LanChartSimpleSolidProps>;
export default LanChartSimpleSolid;
