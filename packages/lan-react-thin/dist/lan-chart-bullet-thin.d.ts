import React from 'react';

export interface LanChartBulletThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartBulletThin(props: LanChartBulletThinProps): React.ReactElement;
export default LanChartBulletThin;
