import React from 'react';

export interface LanChartColumnThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartColumnThin: React.FC<LanChartColumnThinProps>;
export default LanChartColumnThin;
