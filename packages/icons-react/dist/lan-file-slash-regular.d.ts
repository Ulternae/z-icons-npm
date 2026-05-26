import React from 'react';

export interface LanFileSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFileSlashRegular: React.FC<LanFileSlashRegularProps>;
export default LanFileSlashRegular;
