import React from 'react';

export interface LanPencilSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPencilSlash: React.FC<LanPencilSlashProps>;
export default LanPencilSlash;
