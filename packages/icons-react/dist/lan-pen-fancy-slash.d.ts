import React from 'react';

export interface LanPenFancySlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenFancySlash: React.FC<LanPenFancySlashProps>;
export default LanPenFancySlash;
