import React from 'react';

export interface LanChartBulletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartBulletThin: React.FC<LanChartBulletThinProps>;
export default LanChartBulletThin;
