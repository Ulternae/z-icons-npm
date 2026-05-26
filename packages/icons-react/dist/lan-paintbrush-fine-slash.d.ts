import React from 'react';

export interface LanPaintbrushFineSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintbrushFineSlash: React.FC<LanPaintbrushFineSlashProps>;
export default LanPaintbrushFineSlash;
