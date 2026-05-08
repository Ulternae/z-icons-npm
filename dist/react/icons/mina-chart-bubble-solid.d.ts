import React from 'react';

export interface MinaChartBubbleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBubbleSolid: React.FC<MinaChartBubbleSolidProps>;
export default MinaChartBubbleSolid;
