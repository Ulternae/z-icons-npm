import React from 'react';

export interface LanPenNibSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenNibSlash: React.FC<LanPenNibSlashProps>;
export default LanPenNibSlash;
