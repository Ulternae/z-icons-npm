import React from 'react';

export interface LanChartScatterProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartScatter(props: LanChartScatterProps): React.ReactElement;
export default LanChartScatter;
