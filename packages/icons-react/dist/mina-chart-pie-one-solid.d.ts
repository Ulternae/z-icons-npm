import React from 'react';

export interface MinaChartPieOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartPieOneSolid: React.FC<MinaChartPieOneSolidProps>;
export default MinaChartPieOneSolid;
