import React from 'react';

export interface LanImageSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageSlashThin: React.FC<LanImageSlashThinProps>;
export default LanImageSlashThin;
