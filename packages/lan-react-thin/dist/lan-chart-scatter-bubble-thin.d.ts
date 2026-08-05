import React from 'react';

export interface LanChartScatterBubbleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartScatterBubbleThin(props: LanChartScatterBubbleThinProps): React.ReactElement;
export default LanChartScatterBubbleThin;
