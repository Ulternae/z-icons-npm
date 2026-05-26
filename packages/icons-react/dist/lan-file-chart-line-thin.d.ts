import React from 'react';

export interface LanFileChartLineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileChartLineThin: React.FC<LanFileChartLineThinProps>;
export default LanFileChartLineThin;
