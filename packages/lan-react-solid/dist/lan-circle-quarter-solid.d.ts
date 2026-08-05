import React from 'react';

export interface LanCircleQuarterSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuarterSolid(props: LanCircleQuarterSolidProps): React.ReactElement;
export default LanCircleQuarterSolid;
