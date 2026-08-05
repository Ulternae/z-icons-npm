import React from 'react';

export interface LanFileUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanFileUserSolid(props: LanFileUserSolidProps): React.ReactElement;
export default LanFileUserSolid;
