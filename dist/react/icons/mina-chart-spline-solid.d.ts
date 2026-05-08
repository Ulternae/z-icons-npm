import React from 'react';

export interface MinaChartSplineSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartSplineSolid: React.FC<MinaChartSplineSolidProps>;
export default MinaChartSplineSolid;
