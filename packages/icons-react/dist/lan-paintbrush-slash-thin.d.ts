import React from 'react';

export interface LanPaintbrushSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPaintbrushSlashThin: React.FC<LanPaintbrushSlashThinProps>;
export default LanPaintbrushSlashThin;
