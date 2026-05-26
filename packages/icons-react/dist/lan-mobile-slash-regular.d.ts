import React from 'react';

export interface LanMobileSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanMobileSlashRegular: React.FC<LanMobileSlashRegularProps>;
export default LanMobileSlashRegular;
