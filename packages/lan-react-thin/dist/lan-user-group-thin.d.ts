import React from 'react';

export interface LanUserGroupThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserGroupThin(props: LanUserGroupThinProps): React.ReactElement;
export default LanUserGroupThin;
