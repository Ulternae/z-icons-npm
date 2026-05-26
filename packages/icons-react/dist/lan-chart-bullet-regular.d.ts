import React from 'react';

export interface LanChartBulletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartBulletRegular: React.FC<LanChartBulletRegularProps>;
export default LanChartBulletRegular;
