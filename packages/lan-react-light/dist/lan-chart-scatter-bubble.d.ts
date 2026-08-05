import React from 'react';

export interface LanChartScatterBubbleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartScatterBubble(props: LanChartScatterBubbleProps): React.ReactElement;
export default LanChartScatterBubble;
