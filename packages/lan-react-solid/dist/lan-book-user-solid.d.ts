import React from 'react';

export interface LanBookUserSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanBookUserSolid(props: LanBookUserSolidProps): React.ReactElement;
export default LanBookUserSolid;
