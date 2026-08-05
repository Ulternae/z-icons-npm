import React from 'react';

export interface LanFileChartPieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileChartPieSolid(props: LanFileChartPieSolidProps): React.ReactElement;
export default LanFileChartPieSolid;
