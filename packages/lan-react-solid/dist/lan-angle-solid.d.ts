import React from 'react';

export interface LanAngleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanAngleSolid(props: LanAngleSolidProps): React.ReactElement;
export default LanAngleSolid;
