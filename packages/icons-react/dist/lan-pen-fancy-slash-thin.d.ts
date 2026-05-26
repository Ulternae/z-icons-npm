import React from 'react';

export interface LanPenFancySlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenFancySlashThin: React.FC<LanPenFancySlashThinProps>;
export default LanPenFancySlashThin;
