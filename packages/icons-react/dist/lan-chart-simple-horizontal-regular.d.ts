import React from 'react';

export interface LanChartSimpleHorizontalRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartSimpleHorizontalRegular: React.FC<LanChartSimpleHorizontalRegularProps>;
export default LanChartSimpleHorizontalRegular;
