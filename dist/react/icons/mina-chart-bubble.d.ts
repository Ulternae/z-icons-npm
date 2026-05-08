import React from 'react';

export interface MinaChartBubbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBubble: React.FC<MinaChartBubbleProps>;
export default MinaChartBubble;
