import React from 'react';

export interface LanChartSimpleHorizontalProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartSimpleHorizontal: React.FC<LanChartSimpleHorizontalProps>;
export default LanChartSimpleHorizontal;
