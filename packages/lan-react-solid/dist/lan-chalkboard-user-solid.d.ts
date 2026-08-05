import React from 'react';

export interface LanChalkboardUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanChalkboardUserSolid(props: LanChalkboardUserSolidProps): React.ReactElement;
export default LanChalkboardUserSolid;
