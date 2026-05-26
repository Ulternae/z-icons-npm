import React from 'react';

export interface LanPaintbrushSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintbrushSlashSolid: React.FC<LanPaintbrushSlashSolidProps>;
export default LanPaintbrushSlashSolid;
