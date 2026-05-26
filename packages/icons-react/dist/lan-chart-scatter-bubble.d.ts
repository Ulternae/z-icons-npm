import React from 'react';

export interface LanChartScatterBubbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartScatterBubble: React.FC<LanChartScatterBubbleProps>;
export default LanChartScatterBubble;
