import React from 'react';

export interface LanTintSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTintSlashThin: React.FC<LanTintSlashThinProps>;
export default LanTintSlashThin;
