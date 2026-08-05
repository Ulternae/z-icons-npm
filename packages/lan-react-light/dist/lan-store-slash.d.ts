import React from 'react';

export interface LanStoreSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreSlash(props: LanStoreSlashProps): React.ReactElement;
export default LanStoreSlash;
