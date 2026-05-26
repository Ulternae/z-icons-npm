import React from 'react';

export interface LanDesktopSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanDesktopSlashRegular: React.FC<LanDesktopSlashRegularProps>;
export default LanDesktopSlashRegular;
