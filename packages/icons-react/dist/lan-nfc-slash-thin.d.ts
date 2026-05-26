import React from 'react';

export interface LanNfcSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcSlashThin: React.FC<LanNfcSlashThinProps>;
export default LanNfcSlashThin;
