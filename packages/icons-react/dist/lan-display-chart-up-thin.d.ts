import React from 'react';

export interface LanDisplayChartUpThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDisplayChartUpThin: React.FC<LanDisplayChartUpThinProps>;
export default LanDisplayChartUpThin;
