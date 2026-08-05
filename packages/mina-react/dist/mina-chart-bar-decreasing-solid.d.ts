import React from 'react';

export interface MinaChartBarDecreasingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBarDecreasingSolid(props: MinaChartBarDecreasingSolidProps): React.ReactElement;
export default MinaChartBarDecreasingSolid;
