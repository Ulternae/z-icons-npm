import React from 'react';

export interface MinaChartNoAxesCombinedSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartNoAxesCombinedSolid(props: MinaChartNoAxesCombinedSolidProps): React.ReactElement;
export default MinaChartNoAxesCombinedSolid;
