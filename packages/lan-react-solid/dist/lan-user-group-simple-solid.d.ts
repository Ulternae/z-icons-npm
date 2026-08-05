import React from 'react';

export interface LanUserGroupSimpleSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserGroupSimpleSolid(props: LanUserGroupSimpleSolidProps): React.ReactElement;
export default LanUserGroupSimpleSolid;
