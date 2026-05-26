import React from 'react';

export interface LanHeartSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanHeartSlashRegular: React.FC<LanHeartSlashRegularProps>;
export default LanHeartSlashRegular;
