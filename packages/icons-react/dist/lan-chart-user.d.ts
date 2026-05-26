import React from 'react';

export interface LanChartUserProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartUser: React.FC<LanChartUserProps>;
export default LanChartUser;
