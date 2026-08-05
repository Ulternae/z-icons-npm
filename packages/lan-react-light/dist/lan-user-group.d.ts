import React from 'react';

export interface LanUserGroupProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserGroup(props: LanUserGroupProps): React.ReactElement;
export default LanUserGroup;
