import React from 'react';

export interface LanNfcSlashSolidProps extends Omit<React.SVGProps<SVGSVGElement>, 'height' | 'width'> {
  size?: string | number;
}

export declare function LanNfcSlashSolid(props: LanNfcSlashSolidProps): React.ReactElement;
export default LanNfcSlashSolid;
