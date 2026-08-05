import React from 'react';

export interface MinaChartBarIncreasingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBarIncreasingSolid(props: MinaChartBarIncreasingSolidProps): React.ReactElement;
export default MinaChartBarIncreasingSolid;
