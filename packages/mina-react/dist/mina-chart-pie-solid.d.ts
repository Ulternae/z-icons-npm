import React from 'react';

export interface MinaChartPieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartPieSolid(props: MinaChartPieSolidProps): React.ReactElement;
export default MinaChartPieSolid;
