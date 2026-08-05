import React from 'react';

export interface LanImageUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanImageUserSolid(props: LanImageUserSolidProps): React.ReactElement;
export default LanImageUserSolid;
