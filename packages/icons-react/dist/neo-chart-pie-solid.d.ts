import React from 'react';

export interface NeoChartPieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoChartPieSolid: React.FC<NeoChartPieSolidProps>;
export default NeoChartPieSolid;
