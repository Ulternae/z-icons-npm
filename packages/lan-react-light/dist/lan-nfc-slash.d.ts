import React from 'react';

export interface LanNfcSlashProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSlash(props: LanNfcSlashProps): React.ReactElement;
export default LanNfcSlash;
