import React from 'react';

export interface LanUserGroupSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserGroupSolid(props: LanUserGroupSolidProps): React.ReactElement;
export default LanUserGroupSolid;
