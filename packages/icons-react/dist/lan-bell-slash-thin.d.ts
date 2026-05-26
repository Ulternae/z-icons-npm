import React from 'react';

export interface LanBellSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBellSlashThin: React.FC<LanBellSlashThinProps>;
export default LanBellSlashThin;
