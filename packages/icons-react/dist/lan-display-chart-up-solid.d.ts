import React from 'react';

export interface LanDisplayChartUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDisplayChartUpSolid: React.FC<LanDisplayChartUpSolidProps>;
export default LanDisplayChartUpSolid;
