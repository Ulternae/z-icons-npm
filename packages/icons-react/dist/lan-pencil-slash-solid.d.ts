import React from 'react';

export interface LanPencilSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPencilSlashSolid: React.FC<LanPencilSlashSolidProps>;
export default LanPencilSlashSolid;
