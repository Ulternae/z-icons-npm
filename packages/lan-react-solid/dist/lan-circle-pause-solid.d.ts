import React from 'react';

export interface LanCirclePauseSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCirclePauseSolid(props: LanCirclePauseSolidProps): React.ReactElement;
export default LanCirclePauseSolid;
