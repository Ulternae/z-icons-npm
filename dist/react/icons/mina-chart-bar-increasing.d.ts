import React from 'react';

export interface MinaChartBarIncreasingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBarIncreasing: React.FC<MinaChartBarIncreasingProps>;
export default MinaChartBarIncreasing;
