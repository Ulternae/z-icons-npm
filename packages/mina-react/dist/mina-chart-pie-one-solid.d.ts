import React from 'react';

export interface MinaChartPieOneSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function MinaChartPieOneSolid(props: MinaChartPieOneSolidProps): React.ReactElement;
export default MinaChartPieOneSolid;
