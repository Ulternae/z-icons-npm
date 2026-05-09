import React from 'react';

export interface MinaChartBarBigSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBarBigSolid: React.FC<MinaChartBarBigSolidProps>;
export default MinaChartBarBigSolid;
