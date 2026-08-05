import React from 'react';

export interface LanStoreSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanStoreSlashThin(props: LanStoreSlashThinProps): React.ReactElement;
export default LanStoreSlashThin;
