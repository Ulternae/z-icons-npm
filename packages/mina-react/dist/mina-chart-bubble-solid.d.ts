import React from 'react';

export interface MinaChartBubbleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBubbleSolid(props: MinaChartBubbleSolidProps): React.ReactElement;
export default MinaChartBubbleSolid;
