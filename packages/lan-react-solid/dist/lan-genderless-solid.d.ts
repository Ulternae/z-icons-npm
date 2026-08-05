import React from 'react';

export interface LanGenderlessSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGenderlessSolid(props: LanGenderlessSolidProps): React.ReactElement;
export default LanGenderlessSolid;
