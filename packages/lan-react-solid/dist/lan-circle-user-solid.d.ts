import React from 'react';

export interface LanCircleUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCircleUserSolid(props: LanCircleUserSolidProps): React.ReactElement;
export default LanCircleUserSolid;
