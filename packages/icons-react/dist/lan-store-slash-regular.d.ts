import React from 'react';

export interface LanStoreSlashRegularProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreSlashRegular: React.FC<LanStoreSlashRegularProps>;
export default LanStoreSlashRegular;
