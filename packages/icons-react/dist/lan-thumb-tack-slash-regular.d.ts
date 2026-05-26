import React from 'react';

export interface LanThumbTackSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanThumbTackSlashRegular: React.FC<LanThumbTackSlashRegularProps>;
export default LanThumbTackSlashRegular;
