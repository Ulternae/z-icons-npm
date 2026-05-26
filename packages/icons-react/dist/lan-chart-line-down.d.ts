import React from 'react';

export interface LanChartLineDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineDown: React.FC<LanChartLineDownProps>;
export default LanChartLineDown;
