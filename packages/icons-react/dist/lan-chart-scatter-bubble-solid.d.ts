import React from 'react';

export interface LanChartScatterBubbleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartScatterBubbleSolid: React.FC<LanChartScatterBubbleSolidProps>;
export default LanChartScatterBubbleSolid;
