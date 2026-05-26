import React from 'react';

export interface LanChartBulletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanChartBullet: React.FC<LanChartBulletProps>;
export default LanChartBullet;
