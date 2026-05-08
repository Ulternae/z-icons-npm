import React from 'react';

export interface MinaChartBarOneProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartBarOne: React.FC<MinaChartBarOneProps>;
export default MinaChartBarOne;
