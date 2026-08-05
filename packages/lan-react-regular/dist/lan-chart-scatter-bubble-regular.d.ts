import React from 'react';

export interface LanChartScatterBubbleRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartScatterBubbleRegular(props: LanChartScatterBubbleRegularProps): React.ReactElement;
export default LanChartScatterBubbleRegular;
