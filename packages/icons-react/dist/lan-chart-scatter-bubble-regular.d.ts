import React from 'react';

export interface LanChartScatterBubbleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartScatterBubbleRegular: React.FC<LanChartScatterBubbleRegularProps>;
export default LanChartScatterBubbleRegular;
