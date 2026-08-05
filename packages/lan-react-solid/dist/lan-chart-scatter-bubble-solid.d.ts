import React from 'react';

export interface LanChartScatterBubbleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartScatterBubbleSolid(props: LanChartScatterBubbleSolidProps): React.ReactElement;
export default LanChartScatterBubbleSolid;
