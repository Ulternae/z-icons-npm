import React from 'react';

export interface MinaChartBarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBarSolid(props: MinaChartBarSolidProps): React.ReactElement;
export default MinaChartBarSolid;
