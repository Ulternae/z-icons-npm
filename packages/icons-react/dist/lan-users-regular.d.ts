import React from 'react';

export interface LanUsersRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersRegular: React.FC<LanUsersRegularProps>;
export default LanUsersRegular;
