import React from 'react';

export interface MinaChartBarIncreasingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBarIncreasing(props: MinaChartBarIncreasingProps): React.ReactElement;
export default MinaChartBarIncreasing;
