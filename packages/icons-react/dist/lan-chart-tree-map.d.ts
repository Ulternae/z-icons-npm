import React from 'react';

export interface LanChartTreeMapProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartTreeMap: React.FC<LanChartTreeMapProps>;
export default LanChartTreeMap;
