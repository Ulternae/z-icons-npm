import React from 'react';

export interface LanAreaChartThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanAreaChartThin: React.FC<LanAreaChartThinProps>;
export default LanAreaChartThin;
