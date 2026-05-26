import React from 'react';

export interface LanChartLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineThin: React.FC<LanChartLineThinProps>;
export default LanChartLineThin;
