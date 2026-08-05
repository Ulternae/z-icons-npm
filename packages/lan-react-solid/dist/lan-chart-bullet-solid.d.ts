import React from 'react';

export interface LanChartBulletSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartBulletSolid(props: LanChartBulletSolidProps): React.ReactElement;
export default LanChartBulletSolid;
