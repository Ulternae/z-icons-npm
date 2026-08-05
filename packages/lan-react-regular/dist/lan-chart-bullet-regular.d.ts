import React from 'react';

export interface LanChartBulletRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartBulletRegular(props: LanChartBulletRegularProps): React.ReactElement;
export default LanChartBulletRegular;
