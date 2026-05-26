import React from 'react';

export interface LanCompassSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanCompassSlashRegular: React.FC<LanCompassSlashRegularProps>;
export default LanCompassSlashRegular;
