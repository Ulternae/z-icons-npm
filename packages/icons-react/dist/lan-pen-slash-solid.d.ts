import React from 'react';

export interface LanPenSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSlashSolid: React.FC<LanPenSlashSolidProps>;
export default LanPenSlashSolid;
