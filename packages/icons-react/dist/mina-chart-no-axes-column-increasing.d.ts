import React from 'react';

export interface MinaChartNoAxesColumnIncreasingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartNoAxesColumnIncreasing: React.FC<MinaChartNoAxesColumnIncreasingProps>;
export default MinaChartNoAxesColumnIncreasing;
