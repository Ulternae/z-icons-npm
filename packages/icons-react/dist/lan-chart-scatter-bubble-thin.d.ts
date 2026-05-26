import React from 'react';

export interface LanChartScatterBubbleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartScatterBubbleThin: React.FC<LanChartScatterBubbleThinProps>;
export default LanChartScatterBubbleThin;
