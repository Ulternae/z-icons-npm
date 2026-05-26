import React from 'react';

export interface LanPrintSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrintSlashSolid: React.FC<LanPrintSlashSolidProps>;
export default LanPrintSlashSolid;
