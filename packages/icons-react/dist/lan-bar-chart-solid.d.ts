import React from 'react';

export interface LanBarChartSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBarChartSolid: React.FC<LanBarChartSolidProps>;
export default LanBarChartSolid;
