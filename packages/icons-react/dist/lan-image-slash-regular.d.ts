import React from 'react';

export interface LanImageSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanImageSlashRegular: React.FC<LanImageSlashRegularProps>;
export default LanImageSlashRegular;
