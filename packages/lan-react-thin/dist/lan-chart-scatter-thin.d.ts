import React from 'react';

export interface LanChartScatterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartScatterThin(props: LanChartScatterThinProps): React.ReactElement;
export default LanChartScatterThin;
