import React from 'react';

export interface LanChartLineUpProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartLineUp: React.FC<LanChartLineUpProps>;
export default LanChartLineUp;
