import React from 'react';

export interface LanPenSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenSlashRegular: React.FC<LanPenSlashRegularProps>;
export default LanPenSlashRegular;
