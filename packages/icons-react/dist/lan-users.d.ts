import React from 'react';

export interface LanUsersProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsers: React.FC<LanUsersProps>;
export default LanUsers;
