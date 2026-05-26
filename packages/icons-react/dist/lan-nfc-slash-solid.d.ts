import React from 'react';

export interface LanNfcSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcSlashSolid: React.FC<LanNfcSlashSolidProps>;
export default LanNfcSlashSolid;
