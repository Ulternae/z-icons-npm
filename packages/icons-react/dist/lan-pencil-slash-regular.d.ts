import React from 'react';

export interface LanPencilSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPencilSlashRegular: React.FC<LanPencilSlashRegularProps>;
export default LanPencilSlashRegular;
