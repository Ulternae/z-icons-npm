import React from 'react';

export interface LanChartScatterThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartScatterThin: React.FC<LanChartScatterThinProps>;
export default LanChartScatterThin;
