import React from 'react';

export interface MinaChartBarBigProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBarBig(props: MinaChartBarBigProps): React.ReactElement;
export default MinaChartBarBig;
