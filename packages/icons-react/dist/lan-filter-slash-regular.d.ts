import React from 'react';

export interface LanFilterSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanFilterSlashRegular: React.FC<LanFilterSlashRegularProps>;
export default LanFilterSlashRegular;
