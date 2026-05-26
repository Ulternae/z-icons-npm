import React from 'react';

export interface LanPencilSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPencilSlashThin: React.FC<LanPencilSlashThinProps>;
export default LanPencilSlashThin;
