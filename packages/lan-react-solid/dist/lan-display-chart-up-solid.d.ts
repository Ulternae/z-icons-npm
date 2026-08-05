import React from 'react';

export interface LanDisplayChartUpSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanDisplayChartUpSolid(props: LanDisplayChartUpSolidProps): React.ReactElement;
export default LanDisplayChartUpSolid;
