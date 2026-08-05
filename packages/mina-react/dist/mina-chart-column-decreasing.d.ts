import React from 'react';

export interface MinaChartColumnDecreasingProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartColumnDecreasing(props: MinaChartColumnDecreasingProps): React.ReactElement;
export default MinaChartColumnDecreasing;
