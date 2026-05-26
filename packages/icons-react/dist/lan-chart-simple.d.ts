import React from 'react';

export interface LanChartSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartSimple: React.FC<LanChartSimpleProps>;
export default LanChartSimple;
