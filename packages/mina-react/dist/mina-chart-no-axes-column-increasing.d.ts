import React from 'react';

export interface MinaChartNoAxesColumnIncreasingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartNoAxesColumnIncreasing(props: MinaChartNoAxesColumnIncreasingProps): React.ReactElement;
export default MinaChartNoAxesColumnIncreasing;
