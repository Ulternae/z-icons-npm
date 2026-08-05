import React from 'react';

export interface MinaChartBarDecreasingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBarDecreasing(props: MinaChartBarDecreasingProps): React.ReactElement;
export default MinaChartBarDecreasing;
