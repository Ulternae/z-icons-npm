import React from 'react';

export interface LanChartFftThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartFftThin: React.FC<LanChartFftThinProps>;
export default LanChartFftThin;
