import React from 'react';

export interface LanUserGroupSimpleProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserGroupSimple(props: LanUserGroupSimpleProps): React.ReactElement;
export default LanUserGroupSimple;
