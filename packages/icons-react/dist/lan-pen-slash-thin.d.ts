import React from 'react';

export interface LanPenSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSlashThin: React.FC<LanPenSlashThinProps>;
export default LanPenSlashThin;
