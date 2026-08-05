import React from 'react';

export interface LanHomeUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanHomeUserSolid(props: LanHomeUserSolidProps): React.ReactElement;
export default LanHomeUserSolid;
