import React from 'react';

export interface MinaChartNoAxesCombinedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const MinaChartNoAxesCombined: React.FC<MinaChartNoAxesCombinedProps>;
export default MinaChartNoAxesCombined;
