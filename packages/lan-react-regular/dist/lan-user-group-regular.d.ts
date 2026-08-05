import React from 'react';

export interface LanUserGroupRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserGroupRegular(props: LanUserGroupRegularProps): React.ReactElement;
export default LanUserGroupRegular;
