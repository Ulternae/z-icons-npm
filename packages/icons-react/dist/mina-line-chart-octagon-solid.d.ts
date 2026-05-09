import React from 'react';

export interface MinaLineChartOctagonSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaLineChartOctagonSolid: React.FC<MinaLineChartOctagonSolidProps>;
export default MinaLineChartOctagonSolid;
