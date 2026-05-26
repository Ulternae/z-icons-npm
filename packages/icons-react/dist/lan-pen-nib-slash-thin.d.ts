import React from 'react';

export interface LanPenNibSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenNibSlashThin: React.FC<LanPenNibSlashThinProps>;
export default LanPenNibSlashThin;
