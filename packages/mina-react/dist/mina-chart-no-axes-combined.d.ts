import React from 'react';

export interface MinaChartNoAxesCombinedProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartNoAxesCombined(props: MinaChartNoAxesCombinedProps): React.ReactElement;
export default MinaChartNoAxesCombined;
