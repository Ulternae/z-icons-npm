import React from 'react';

export interface MinaChartColumnSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartColumnSolid(props: MinaChartColumnSolidProps): React.ReactElement;
export default MinaChartColumnSolid;
