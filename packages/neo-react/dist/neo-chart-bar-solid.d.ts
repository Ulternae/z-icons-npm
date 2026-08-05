import React from 'react';

export interface NeoChartBarSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoChartBarSolid(props: NeoChartBarSolidProps): React.ReactElement;
export default NeoChartBarSolid;
