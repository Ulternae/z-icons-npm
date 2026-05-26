import React from 'react';

export interface LanSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanSlashRegular: React.FC<LanSlashRegularProps>;
export default LanSlashRegular;
