import React from 'react';

export interface LanBoltSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanBoltSlashRegular: React.FC<LanBoltSlashRegularProps>;
export default LanBoltSlashRegular;
