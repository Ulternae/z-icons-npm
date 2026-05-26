import React from 'react';

export interface LanChartSineThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartSineThin: React.FC<LanChartSineThinProps>;
export default LanChartSineThin;
