import React from 'react';

export interface LanUsersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanUsersRegular(props: LanUsersRegularProps): React.ReactElement;
export default LanUsersRegular;
