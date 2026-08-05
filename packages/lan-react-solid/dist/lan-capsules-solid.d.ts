import React from 'react';

export interface LanCapsulesSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanCapsulesSolid(props: LanCapsulesSolidProps): React.ReactElement;
export default LanCapsulesSolid;
