import React from 'react';

export interface LanChartSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartSimpleSolid(props: LanChartSimpleSolidProps): React.ReactElement;
export default LanChartSimpleSolid;
