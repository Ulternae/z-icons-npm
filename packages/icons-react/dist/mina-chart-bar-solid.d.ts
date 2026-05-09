import React from 'react';

export interface MinaChartBarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBarSolid: React.FC<MinaChartBarSolidProps>;
export default MinaChartBarSolid;
