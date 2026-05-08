import React from 'react';

export interface MinaChartColumnIncreasingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartColumnIncreasing: React.FC<MinaChartColumnIncreasingProps>;
export default MinaChartColumnIncreasing;
