import React from 'react';

export interface LanChartFftSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartFftSolid: React.FC<LanChartFftSolidProps>;
export default LanChartFftSolid;
