import React from 'react';

export interface LanPrintSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPrintSlashRegular: React.FC<LanPrintSlashRegularProps>;
export default LanPrintSlashRegular;
