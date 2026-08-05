import React from 'react';

export interface LanUserKeyProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUserKey(props: LanUserKeyProps): React.ReactElement;
export default LanUserKey;
