import React from 'react';

export interface MinaChartBubbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBubble(props: MinaChartBubbleProps): React.ReactElement;
export default MinaChartBubble;
