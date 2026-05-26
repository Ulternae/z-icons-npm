import React from 'react';

export interface LanShieldSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanShieldSlashRegular: React.FC<LanShieldSlashRegularProps>;
export default LanShieldSlashRegular;
