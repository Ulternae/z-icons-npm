import React from 'react';

export interface LanChartSineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartSineSolid: React.FC<LanChartSineSolidProps>;
export default LanChartSineSolid;
