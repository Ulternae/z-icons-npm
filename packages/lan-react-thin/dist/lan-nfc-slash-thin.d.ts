import React from 'react';

export interface LanNfcSlashThinProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSlashThin(props: LanNfcSlashThinProps): React.ReactElement;
export default LanNfcSlashThin;
