import React from 'react';

export interface LanUserSithProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserSith(props: LanUserSithProps): React.ReactElement;
export default LanUserSith;
