import React from 'react';

export interface LanChartPieThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartPieThin: React.FC<LanChartPieThinProps>;
export default LanChartPieThin;
