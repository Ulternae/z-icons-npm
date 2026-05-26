import React from 'react';

export interface LanNfcSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanNfcSlashRegular: React.FC<LanNfcSlashRegularProps>;
export default LanNfcSlashRegular;
