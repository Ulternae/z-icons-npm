import React from 'react';

export interface LanChartScatter3dProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartScatter3d: React.FC<LanChartScatter3dProps>;
export default LanChartScatter3d;
