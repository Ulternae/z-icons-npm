import React from 'react';

export interface MinaChartLineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartLineSolid(props: MinaChartLineSolidProps): React.ReactElement;
export default MinaChartLineSolid;
