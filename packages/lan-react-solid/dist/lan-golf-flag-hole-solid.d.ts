import React from 'react';

export interface LanGolfFlagHoleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanGolfFlagHoleSolid(props: LanGolfFlagHoleSolidProps): React.ReactElement;
export default LanGolfFlagHoleSolid;
