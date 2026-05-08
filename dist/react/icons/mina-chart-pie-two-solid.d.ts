import React from 'react';

export interface MinaChartPieTwoSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartPieTwoSolid: React.FC<MinaChartPieTwoSolidProps>;
export default MinaChartPieTwoSolid;
