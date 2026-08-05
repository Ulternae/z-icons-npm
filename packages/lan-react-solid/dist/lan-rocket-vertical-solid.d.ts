import React from 'react';

export interface LanRocketVerticalSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanRocketVerticalSolid(props: LanRocketVerticalSolidProps): React.ReactElement;
export default LanRocketVerticalSolid;
