import React from 'react';

export interface LanChartSimpleHorizontalThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartSimpleHorizontalThin: React.FC<LanChartSimpleHorizontalThinProps>;
export default LanChartSimpleHorizontalThin;
