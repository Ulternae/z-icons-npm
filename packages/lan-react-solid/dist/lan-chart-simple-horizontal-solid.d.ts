import React from 'react';

export interface LanChartSimpleHorizontalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChartSimpleHorizontalSolid(props: LanChartSimpleHorizontalSolidProps): React.ReactElement;
export default LanChartSimpleHorizontalSolid;
