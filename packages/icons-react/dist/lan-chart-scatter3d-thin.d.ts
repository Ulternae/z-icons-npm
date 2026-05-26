import React from 'react';

export interface LanChartScatter3dThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartScatter3dThin: React.FC<LanChartScatter3dThinProps>;
export default LanChartScatter3dThin;
