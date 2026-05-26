import React from 'react';

export interface LanStoreSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare const LanStoreSlashThin: React.FC<LanStoreSlashThinProps>;
export default LanStoreSlashThin;
