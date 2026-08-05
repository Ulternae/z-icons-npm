import React from 'react';

export interface LanCircleQuartersSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleQuartersSolid(props: LanCircleQuartersSolidProps): React.ReactElement;
export default LanCircleQuartersSolid;
