import React from 'react';

export interface LanTableSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanTableSlashRegular: React.FC<LanTableSlashRegularProps>;
export default LanTableSlashRegular;
