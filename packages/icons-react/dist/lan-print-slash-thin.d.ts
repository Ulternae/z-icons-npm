import React from 'react';

export interface LanPrintSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrintSlashThin: React.FC<LanPrintSlashThinProps>;
export default LanPrintSlashThin;
