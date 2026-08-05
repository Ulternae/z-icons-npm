import React from 'react';

export interface LanBackpackSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBackpackSolid(props: LanBackpackSolidProps): React.ReactElement;
export default LanBackpackSolid;
