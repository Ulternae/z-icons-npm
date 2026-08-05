import React from 'react';

export interface LanChartPieSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartPieSolid(props: LanChartPieSolidProps): React.ReactElement;
export default LanChartPieSolid;
