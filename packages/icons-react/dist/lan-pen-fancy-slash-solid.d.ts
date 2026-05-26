import React from 'react';

export interface LanPenFancySlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenFancySlashSolid: React.FC<LanPenFancySlashSolidProps>;
export default LanPenFancySlashSolid;
