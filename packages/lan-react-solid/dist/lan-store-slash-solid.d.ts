import React from 'react';

export interface LanStoreSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreSlashSolid(props: LanStoreSlashSolidProps): React.ReactElement;
export default LanStoreSlashSolid;
