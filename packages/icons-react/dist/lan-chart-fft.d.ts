import React from 'react';

export interface LanChartFftProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartFft: React.FC<LanChartFftProps>;
export default LanChartFft;
