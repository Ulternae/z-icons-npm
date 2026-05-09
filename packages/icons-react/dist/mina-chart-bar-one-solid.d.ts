import React from 'react';

export interface MinaChartBarOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBarOneSolid: React.FC<MinaChartBarOneSolidProps>;
export default MinaChartBarOneSolid;
