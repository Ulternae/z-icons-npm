import React from 'react';

export interface LanUsersSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanUsersSlashThin: React.FC<LanUsersSlashThinProps>;
export default LanUsersSlashThin;
