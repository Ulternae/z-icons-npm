import React from 'react';

export interface MinaLineChartCircleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLineChartCircleSolid: React.FC<MinaLineChartCircleSolidProps>;
export default MinaLineChartCircleSolid;
