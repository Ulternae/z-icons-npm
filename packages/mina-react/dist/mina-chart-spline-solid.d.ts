import React from 'react';

export interface MinaChartSplineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartSplineSolid(props: MinaChartSplineSolidProps): React.ReactElement;
export default MinaChartSplineSolid;
