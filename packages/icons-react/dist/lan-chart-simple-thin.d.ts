import React from 'react';

export interface LanChartSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartSimpleThin: React.FC<LanChartSimpleThinProps>;
export default LanChartSimpleThin;
