import React from 'react';

export interface LanPenFancySlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanPenFancySlashRegular: React.FC<LanPenFancySlashRegularProps>;
export default LanPenFancySlashRegular;
