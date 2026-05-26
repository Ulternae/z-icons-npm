import React from 'react';

export interface LanChartTreeMapThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartTreeMapThin: React.FC<LanChartTreeMapThinProps>;
export default LanChartTreeMapThin;
