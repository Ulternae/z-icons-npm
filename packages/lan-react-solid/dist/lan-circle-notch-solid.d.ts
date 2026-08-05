import React from 'react';

export interface LanCircleNotchSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleNotchSolid(props: LanCircleNotchSolidProps): React.ReactElement;
export default LanCircleNotchSolid;
