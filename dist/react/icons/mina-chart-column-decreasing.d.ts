import React from 'react';

export interface MinaChartColumnDecreasingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartColumnDecreasing: React.FC<MinaChartColumnDecreasingProps>;
export default MinaChartColumnDecreasing;
