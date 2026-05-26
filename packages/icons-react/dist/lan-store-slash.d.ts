import React from 'react';

export interface LanStoreSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreSlash: React.FC<LanStoreSlashProps>;
export default LanStoreSlash;
