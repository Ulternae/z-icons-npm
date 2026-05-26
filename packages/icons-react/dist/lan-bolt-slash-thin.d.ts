import React from 'react';

export interface LanBoltSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoltSlashThin: React.FC<LanBoltSlashThinProps>;
export default LanBoltSlashThin;
