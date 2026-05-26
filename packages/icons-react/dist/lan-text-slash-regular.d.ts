import React from 'react';

export interface LanTextSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTextSlashRegular: React.FC<LanTextSlashRegularProps>;
export default LanTextSlashRegular;
