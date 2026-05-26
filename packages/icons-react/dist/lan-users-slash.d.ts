import React from 'react';

export interface LanUsersSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersSlash: React.FC<LanUsersSlashProps>;
export default LanUsersSlash;
