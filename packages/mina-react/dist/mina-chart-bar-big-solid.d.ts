import React from 'react';

export interface MinaChartBarBigSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBarBigSolid(props: MinaChartBarBigSolidProps): React.ReactElement;
export default MinaChartBarBigSolid;
