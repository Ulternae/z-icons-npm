import React from 'react';

export interface LanPaintbrushSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintbrushSlashRegular: React.FC<LanPaintbrushSlashRegularProps>;
export default LanPaintbrushSlashRegular;
