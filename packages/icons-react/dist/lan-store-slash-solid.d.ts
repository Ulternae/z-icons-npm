import React from 'react';

export interface LanStoreSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreSlashSolid: React.FC<LanStoreSlashSolidProps>;
export default LanStoreSlashSolid;
