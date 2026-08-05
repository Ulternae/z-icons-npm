import React from 'react';

export interface LanChartFftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartFftThin(props: LanChartFftThinProps): React.ReactElement;
export default LanChartFftThin;
