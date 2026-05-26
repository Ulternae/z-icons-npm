import React from 'react';

export interface LanPenAltSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenAltSlash: React.FC<LanPenAltSlashProps>;
export default LanPenAltSlash;
