import React from 'react';

export interface LanPrintSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrintSlash: React.FC<LanPrintSlashProps>;
export default LanPrintSlash;
