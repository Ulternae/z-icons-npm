import React from 'react';

export interface LanChartLineUpDownProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineUpDown: React.FC<LanChartLineUpDownProps>;
export default LanChartLineUpDown;
