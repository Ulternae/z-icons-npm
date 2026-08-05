import React from 'react';

export interface LanChartBulletProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartBullet(props: LanChartBulletProps): React.ReactElement;
export default LanChartBullet;
