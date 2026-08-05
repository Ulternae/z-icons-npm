import React from 'react';

export interface NeoChartPieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function NeoChartPieSolid(props: NeoChartPieSolidProps): React.ReactElement;
export default NeoChartPieSolid;
