import React from 'react';

export interface LanUsersLineRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersLineRegular: React.FC<LanUsersLineRegularProps>;
export default LanUsersLineRegular;
