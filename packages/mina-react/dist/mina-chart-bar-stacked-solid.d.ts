import React from 'react';

export interface MinaChartBarStackedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartBarStackedSolid(props: MinaChartBarStackedSolidProps): React.ReactElement;
export default MinaChartBarStackedSolid;
