import React from 'react';

export interface LanChartScatterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartScatterSolid: React.FC<LanChartScatterSolidProps>;
export default LanChartScatterSolid;
