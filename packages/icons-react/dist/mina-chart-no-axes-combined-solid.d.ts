import React from 'react';

export interface MinaChartNoAxesCombinedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartNoAxesCombinedSolid: React.FC<MinaChartNoAxesCombinedSolidProps>;
export default MinaChartNoAxesCombinedSolid;
