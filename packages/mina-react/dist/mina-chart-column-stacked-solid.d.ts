import React from 'react';

export interface MinaChartColumnStackedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartColumnStackedSolid(props: MinaChartColumnStackedSolidProps): React.ReactElement;
export default MinaChartColumnStackedSolid;
