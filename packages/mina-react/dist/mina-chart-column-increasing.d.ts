import React from 'react';

export interface MinaChartColumnIncreasingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartColumnIncreasing(props: MinaChartColumnIncreasingProps): React.ReactElement;
export default MinaChartColumnIncreasing;
