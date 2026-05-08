import React from 'react';

export interface MinaChartBarDecreasingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBarDecreasing: React.FC<MinaChartBarDecreasingProps>;
export default MinaChartBarDecreasing;
