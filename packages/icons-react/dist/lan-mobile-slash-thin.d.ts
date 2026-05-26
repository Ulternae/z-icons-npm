import React from 'react';

export interface LanMobileSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileSlashThin: React.FC<LanMobileSlashThinProps>;
export default LanMobileSlashThin;
