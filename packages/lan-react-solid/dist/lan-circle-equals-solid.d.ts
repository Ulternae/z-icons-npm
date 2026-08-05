import React from 'react';

export interface LanCircleEqualsSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleEqualsSolid(props: LanCircleEqualsSolidProps): React.ReactElement;
export default LanCircleEqualsSolid;
