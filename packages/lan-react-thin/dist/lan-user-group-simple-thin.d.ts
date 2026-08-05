import React from 'react';

export interface LanUserGroupSimpleThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserGroupSimpleThin(props: LanUserGroupSimpleThinProps): React.ReactElement;
export default LanUserGroupSimpleThin;
