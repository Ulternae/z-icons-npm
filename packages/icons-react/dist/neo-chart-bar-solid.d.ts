import React from 'react';

export interface NeoChartBarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const NeoChartBarSolid: React.FC<NeoChartBarSolidProps>;
export default NeoChartBarSolid;
