import React from 'react';

export interface LanChartBulletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartBulletSolid: React.FC<LanChartBulletSolidProps>;
export default LanChartBulletSolid;
