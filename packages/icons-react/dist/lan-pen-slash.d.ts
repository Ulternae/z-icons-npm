import React from 'react';

export interface LanPenSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSlash: React.FC<LanPenSlashProps>;
export default LanPenSlash;
