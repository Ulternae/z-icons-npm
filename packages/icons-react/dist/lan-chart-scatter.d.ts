import React from 'react';

export interface LanChartScatterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartScatter: React.FC<LanChartScatterProps>;
export default LanChartScatter;
