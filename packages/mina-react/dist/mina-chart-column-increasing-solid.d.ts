import React from 'react';

export interface MinaChartColumnIncreasingSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartColumnIncreasingSolid(props: MinaChartColumnIncreasingSolidProps): React.ReactElement;
export default MinaChartColumnIncreasingSolid;
